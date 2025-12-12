import json
import re

def parse_script(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    story_data = {}
    current_id = None
    current_text = []
    current_choices = []

    for line in lines:
        line = line.strip()
        
        # 忽略空行
        if not line:
            continue

        # 1. 偵測場景 ID (例如: # start)
        if line.startswith('#'):
            # 儲存上一個節點
            if current_id:
                story_data[current_id] = {
                    "text": "\n\n".join(current_text),
                    "choices": current_choices
                }
            
            # 重置變數
            current_id = line[1:].strip()
            current_text = []
            current_choices = []
        
        # 2. 偵測選項 (例如: * 點頭 -> scene_nod)
        elif line.startswith('*'):
            if '->' in line:
                text_part, next_node = line[1:].split('->')
                current_choices.append({
                    "text": text_part.strip(),
                    "nextNode": next_node.strip()
                })
            else:
                print(f"警告：選項格式錯誤 -> {line}")

        # 3. 普通劇情文字
        else:
            current_text.append(line)

    # 儲存最後一個節點
    if current_id:
        story_data[current_id] = {
            "text": "\n\n".join(current_text),
            "choices": current_choices
        }

    return story_data

def save_to_js(data, output_file):
    json_str = json.dumps(data, ensure_ascii=False, indent=4)
    js_content = f"const storyData = {json_str};"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"成功轉換！已生成 {output_file} (包含 {len(data)} 個場景)")

if __name__ == "__main__":
    # 執行轉換
    try:
        data = parse_script("script.txt")
        save_to_js(data, "data.js")
    except FileNotFoundError:
        print("錯誤：找不到 script.txt，請確認檔案在同一個資料夾內。")