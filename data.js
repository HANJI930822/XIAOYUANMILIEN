const storyData = {
    "start": {
        "text": "【第一章：下午的陽光與即將到來的雷雨】\n\n秋天的午後陽光透過活動中心三樓會議室的玻璃窗灑進來。\n\n這個時節的校園總是特別美，但今天這份美好卻無法撫平會議室裡逐漸升溫的緊張氣氛。",
        "choices": [
            {
                "text": "觀察會議室",
                "nextNode": "scene_lin_speech"
            }
        ],
        "bg": "meeting_room_sunny.png",
        "bgm": "daily.mp3"
    },
    "scene_lin_speech": {
        "text": "林宇軒站在白板前，手中的藍色簽字筆在空中劃過一道弧線。\n\n<span class='name-tag'>林宇軒</span>：「各位，今年的文化祭我們要辦得比去年更盛大！」\n\n他眼神中閃爍著興奮的光芒。\n\n<span class='name-tag'>林宇軒</span>：「我已經跟學校申請到更多的預算，我們可以邀請三個樂團，還有專業的舞台燈光團隊！」",
        "choices": [
            {
                "text": "點頭表示支持 (你是他的老室友)",
                "nextNode": "scene_support",
                "effect": {
                    "yuxuan": 5
                }
            },
            {
                "text": "保持中立觀察 (你是理性的顧問)",
                "nextNode": "scene_observe"
            }
        ],
        "bg": "meeting_room_sunny.png"
    },
    "scene_support": {
        "text": "你微微點頭。你認識林宇軒多年，知道這個大學室友的熱情和行動力。\n\n但隨即，你注意到了不對勁的地方。",
        "choices": [
            {
                "text": "看向江晨希",
                "nextNode": "scene_jiang_reaction"
            }
        ],
        "bg": "meeting_room_sunny.png"
    },
    "scene_observe": {
        "text": "你是特地請假從機械所趕來旁聽的。作為顧問，你習慣冷靜評估。\n\n你將目光移向會議桌的中間。",
        "choices": [
            {
                "text": "看向江晨希",
                "nextNode": "scene_jiang_reaction"
            }
        ],
        "bg": "meeting_room_sunny.png"
    },
    "scene_jiang_reaction": {
        "text": "江晨希坐得很直，手中的文件正在她的指尖下微微顫動——那是一種努力克制情緒的表現。\n\n<span class='name-tag'>林宇軒</span>：「我們還可以增加攤位數量。去年有同學反映攤位不夠...」\n\n<span class='name-tag'>江晨希</span>：「等一下。」\n\n一個清冷的女聲突然打斷了他的話，像一把利刃劃破了會議室裡熱烈的氛圍。",
        "choices": [
            {
                "text": "保持沉默，看著事態發展",
                "nextNode": "scene_clash_1"
            }
        ],
        "bg": "meeting_room_tense.png",
        "bgm": "tense.mp3"
    },
    "scene_clash_1": {
        "text": "【二、第一次交鋒】\n\n會議室裡的空氣瞬間凝結。林宇軒的手僵在半空中。\n\n江晨希緩緩推了推眼鏡，站起身來。\n\n<span class='name-tag'>江晨希</span>：「你說申請到更多預算？」\n\n江晨希翻開文件，語氣帶著明顯的質疑。\n\n<span class='name-tag'>江晨希</span>：「根據我從總務處拿到的正式文件，今年學校給學生會的預算比去年少了百分之十五。林宇軒，你到底有沒有確認過實際的數字？」",
        "choices": [
            {
                "text": "皺眉，這下麻煩了",
                "nextNode": "scene_clash_2"
            }
        ],
        "bg": "meeting_room_tense.png"
    },
    "scene_clash_2": {
        "text": "會議室裡響起了倒抽氣的聲音。\n\n林宇軒的臉色變得難看，顯然感到了羞愧。\n\n<span class='name-tag'>林宇軒</span>：「這不可能。我上週才跟教務處的王主任確認過...」\n\n<span class='name-tag'>江晨希</span>：「王主任說的是『會盡量幫忙』，不是『已經核准』。」\n\n江晨希冷靜地打斷他，手指點著文件上的赤字。\n\n<span class='name-tag'>江晨希</span>：「本年度預算減少了六萬元。如果按照你的方案，我們連場地佈置的基本費用都付不起。」",
        "choices": [
            {
                "text": "看林宇軒的反應",
                "nextNode": "scene_clash_3"
            }
        ],
        "bg": "meeting_room_tense.png"
    },
    "scene_clash_3": {
        "text": "林宇軒感覺像被一盆冷水當頭澆下。\n\n林宇軒深吸一口氣，握緊了手中的筆。\n\n<span class='name-tag'>林宇軒</span>：「那妳為什麼不早說？妳是故意要讓我在大家面前出醜嗎？」",
        "choices": [
            {
                "text": "嘆氣，雙方都有道理",
                "nextNode": "scene_clash_4"
            }
        ],
        "bg": "meeting_room_tense.png"
    },
    "scene_clash_4": {
        "text": "<span class='name-tag'>江晨希</span>：「我三天前就把文件發到公共信箱了，還標註了紅色驚嘆號。是你自己沒有檢查郵件。」\n\n林宇軒愣住了。羞愧轉變成了防禦性的憤怒。\n\n<span class='name-tag'>林宇軒</span>：「就算是我的疏忽，但妳這種態度是什麼意思？我們是團隊，不是妳來監督我工作的！」\n\n場面即將失控。",
        "choices": [
            {
                "text": "【分支】出聲打圓場，試圖緩和氣氛",
                "nextNode": "scene_intervene",
                "effect": {
                    "chenxi": 5,
                    "yuxuan": 5
                }
            },
            {
                "text": "【分支】保持沉默，讓他們自己解決",
                "nextNode": "scene_silence"
            }
        ],
        "bg": "meeting_room_tense.png"
    },
    "scene_intervene": {
        "text": "<span class='name-tag'>顧明杰</span>：「好了，都少說兩句。現在重點是解決問題，不是吵架。」\n\n但你的聲音被淹沒在兩人的對視中。\n\n<span class='name-tag'>江晨希</span>：「我犯錯會承認，而不是推卸責任。現在距離文化祭只剩三週，你告訴我，怎麼辦？」",
        "choices": [
            {
                "text": "繼續",
                "nextNode": "scene_breakdown"
            }
        ],
        "bg": "meeting_room_tense.png"
    },
    "scene_silence": {
        "text": "你選擇不插手。這不僅是預算問題，更是兩種性格的碰撞。\n\n<span class='name-tag'>江晨希</span>：「身為部長，你應該對細節負責。現在距離文化祭只剩三週，你告訴我，怎麼辦？」",
        "choices": [
            {
                "text": "繼續",
                "nextNode": "scene_breakdown"
            }
        ],
        "bg": "meeting_room_tense.png"
    },
    "scene_breakdown": {
        "text": "【五、破裂的時刻】\n\n林宇軒感到了巨大的挫敗感。\n\n<span class='name-tag'>林宇軒</span>：「好。妳說得對。會議暫停。我需要重新規劃。」\n\n他用力把筆拍在桌上，轉身走向門口。門在他身後發出一聲悶響。\n\n會議室陷入死寂。林語晴立刻抓起包包追了出去。",
        "choices": [
            {
                "text": "追出去看看宇軒 (進入宇軒線)",
                "nextNode": "scene_corridor_yuxuan",
                "effect": {
                    "yuxuan": 10
                }
            },
            {
                "text": "留下來安撫晨希 (進入晨希線)",
                "nextNode": "scene_room_chenxi",
                "effect": {
                    "chenxi": 10
                }
            }
        ],
        "bg": "meeting_room_dark.png",
        "bgm": "sad.mp3"
    },
    "scene_corridor_yuxuan": {
        "text": "【七、走廊上的陪伴】\n\n你走出會議室，在走廊盡頭看到了林宇軒。\n\n林語晴已經在他身邊了，眼神充滿關切。\n\n<span class='name-tag'>林語晴</span>：「宇軒...」\n\n<span class='name-tag'>林宇軒</span>：「我沒事。只是需要時間整理思緒。」\n\n你知道他在逞強。\n\n<span class='name-tag'>林語晴</span>：「你一點都不失敗。我覺得江晨希太過分了。」\n\n<span class='name-tag'>林宇軒</span>：「但她說得對，我確實犯了錯。」\n\n(此路線結束)",
        "choices": [
            {
                "text": "進入第二章",
                "nextNode": "chapter2_start"
            }
        ],
        "bg": "corridor_sunset.png"
    },
    "scene_room_chenxi": {
        "text": "【六、餘波】\n\n你選擇留在會議室。人群散去，只剩下江晨希和溫若雨。\n\n江晨希摘下眼鏡，疲憊地揉著太陽穴。\n\n<span class='name-tag'>江晨希</span>：「如果不把話說清楚，文化祭就會一團糟。」\n\n<span class='name-tag'>溫若雨</span>：「但妳的語氣...宇軒很愛面子，他肯定覺得很難堪。」\n\n江晨希沉默了幾秒，聲音帶著一絲複雜。\n\n<span class='name-tag'>江晨希</span>：「那他應該一開始就把事情做對。」\n\n<span class='name-tag'>溫若雨</span>：「妳也知道，這不僅僅是預算問題。你們兩個從一開始就不對盤。」\n\n江晨希沒有反駁。\n\n(此路線結束)",
        "choices": [
            {
                "text": "進入第二章",
                "nextNode": "chapter2_start"
            }
        ],
        "bg": "meeting_room_sunset.png"
    },
    "chapter2_start": {
        "text": "【第二章：圖書館裡的寧靜世界】\n\n文化祭籌備會議結束後的第三天，校園的氣氛變得微妙起來。\n\n但在圖書館三樓的自習區，這裡彷彿是另一個世界。\n\n秋日的午後陽光透過落地窗灑進來。這裡是整個圖書館最安靜的區域。",
        "choices": [
            {
                "text": "進入方景行的視角",
                "nextNode": "c2_fang_intro"
            }
        ],
        "bg": "library_sunny.png",
        "bgm": "daily.mp3"
    },
    "c2_fang_intro": {
        "text": "你坐在靠窗的角落位置。背後是實牆，讓你感到安全。\n\n你戴著黑色的降噪耳機，手指在鍵盤上飛快敲擊。\n\n螢幕上是一串串複雜的程式碼。\n\n你完全沉浸在自己的世界裡。作為電機系大四的風雲人物，你的才華無人能及，但你的性格讓你與人群格格不入。\n\n你享受這種疏離感。程式語言是你唯一的朋友。",
        "choices": [
            {
                "text": "繼續調試演算法",
                "nextNode": "c2_wen_enter"
            }
        ],
        "bg": "library_sunny.png"
    },
    "c2_wen_enter": {
        "text": "你正在調試一個複雜的演算法，陷入了一種近乎執著的狀態。\n\n<span class='name-tag'>溫若雨</span>：「學長。」\n\n一個輕柔的聲音突然在耳邊響起。\n\n你嚇了一跳，手指一滑，差點刪掉重要代碼。\n\n溫若雨正站在你的座位旁，手裡拿著兩杯咖啡。她穿著米白色的針織衫，臉上帶著淡淡的微笑。\n\n<span class='name-tag'>溫若雨</span>：「看你在這裡坐了三個小時都沒動，想說給你帶杯咖啡。」\n\n她將咖啡放在桌上，輕輕在對面坐下。\n\n你不習慣這種突如其來的關心。",
        "choices": [
            {
                "text": "【冷淡】禮貌道謝，繼續做自己的事",
                "nextNode": "c2_cold",
                "effect": {
                    "fang": 5
                }
            },
            {
                "text": "【觀察】看著她，覺得她話中有話",
                "nextNode": "c2_curious",
                "effect": {
                    "wen": 5
                }
            }
        ],
        "bg": "library_sunny.png"
    },
    "c2_cold": {
        "text": "<span class='name-tag'>方景行</span>：「謝謝。」\n\n你簡短地說道，聲音有些生硬。然後你低下頭，假裝繼續看著螢幕。\n\n但她沒有走，只是安靜地看著窗外。",
        "choices": [
            {
                "text": "沉默持續了一陣子",
                "nextNode": "c2_conversation"
            }
        ],
        "bg": "library_sunny.png"
    },
    "c2_curious": {
        "text": "你感到一絲疑惑。她明明坐下了，卻不說話。\n\n你稍微觀察了一下她。陽光照在她的側臉上，讓她看起來有些脆弱。\n\n<span class='name-tag'>方景行</span>：「妳找我有事？」\n\n溫若雨轉過頭，露出一個勉強的笑容。",
        "choices": [
            {
                "text": "準備開始對話",
                "nextNode": "c2_conversation"
            }
        ],
        "bg": "library_sunny.png"
    },
    "c2_conversation": {
        "text": "沉默持續了大約兩分鐘。\n\n<span class='name-tag'>溫若雨</span>：「學長，你覺得兩個性格完全不同的人，有可能好好相處嗎？」\n\n這是一個很奇怪的問題。\n\n<span class='name-tag'>方景行</span>：「為什麼突然問這個？」\n\n溫若雨苦笑了一下，眼神流露出一絲疲憊。\n\n<span class='name-tag'>溫若雨</span>：「我的閨蜜晨希，前幾天跟學生會的宇軒起了衝突。一個追求完美，一個是行動派。他們吵得很兇。」",
        "choices": [
            {
                "text": "理性分析",
                "nextNode": "c2_analyze",
                "effect": {
                    "fang": 5
                }
            },
            {
                "text": "表示同情",
                "nextNode": "c2_sympathy",
                "effect": {
                    "wen": 5
                }
            }
        ],
        "bg": "library_sunny.png"
    },
    "c2_analyze": {
        "text": "<span class='name-tag'>方景行</span>：「性格不同不代表不能相處。問題在於雙方是否願意理解和包容對方。」\n\n你看著她，語氣冷靜。\n\n<span class='name-tag'>方景行</span>：「但這很難。因為人往往只能看到自己的角度，很少有人願意先改變自己。」\n\n溫若雨認真聽著，眼神閃過一絲共鳴。\n\n<span class='name-tag'>溫若雨</span>：「學長說得對。晨希覺得宇軒不負責，宇軒覺得晨希太嚴苛。」",
        "choices": [
            {
                "text": "繼續",
                "nextNode": "c2_deep_talk"
            }
        ],
        "bg": "library_sunny.png"
    },
    "c2_sympathy": {
        "text": "你看著她擔憂的樣子，心中的防線稍微鬆動了一點。\n\n<span class='name-tag'>方景行</span>：「聽起來妳夾在中間很為難。」\n\n溫若雨點點頭，嘆了口氣。\n\n<span class='name-tag'>溫若雨</span>：「他們都是我很重要的人。看著他們互相傷害，比我自己受傷還難受。」",
        "choices": [
            {
                "text": "繼續",
                "nextNode": "c2_deep_talk"
            }
        ],
        "bg": "library_sunny.png"
    },
    "c2_deep_talk": {
        "text": "<span class='name-tag'>方景行</span>：「妳為什麼這麼關心這件事？」\n\n你發現自己對這個學妹產生了一絲好奇。\n\n溫若雨沉默了幾秒，輕聲說道。\n\n<span class='name-tag'>溫若雨</span>：「因為我不想看到身邊的人互相傷害。人與人之間的關係很脆弱，稍不注意就會破裂。」\n\n她的聲音帶著顫抖。你從她的話語中聽出了深深的恐懼——對失去的恐懼。\n\n這讓你響起了自己的童年。原來，她和你一樣，都在害怕失去。\n\n<span class='name-tag'>方景行</span>：「妳...有試著跟他們談談嗎？」\n\n溫若雨搖頭，顯得很無助。",
        "choices": [
            {
                "text": "【建議】讓她做中間人，傳遞善意",
                "nextNode": "c2_advice_bridge",
                "effect": {
                    "wen": 10,
                    "fang": 5
                }
            },
            {
                "text": "【勸告】告訴她不要過度承擔別人的責任",
                "nextNode": "c2_advice_detach",
                "effect": {
                    "fang": 10
                }
            }
        ],
        "bg": "library_sunny.png",
        "bgm": "sad.mp3"
    },
    "c2_advice_bridge": {
        "text": "<span class='name-tag'>方景行</span>：「如果妳不想選邊站，那就做一個中間人。」\n\n你的聲音比平常溫和了一些。\n\n<span class='name-tag'>方景行</span>：「幫助他們互相理解。告訴晨希，宇軒的努力妳看得見；也告訴宇軒，晨希的擔心是有道理的。」\n\n溫若雨抬起頭，眼神中閃過一絲光芒。\n\n<span class='name-tag'>溫若雨</span>：「謝謝你，學長。我一直在想該怎麼做...你說得對。」",
        "choices": [
            {
                "text": "時間流逝",
                "nextNode": "c2_sunset_connection"
            }
        ],
        "bg": "library_sunny.png"
    },
    "c2_advice_detach": {
        "text": "<span class='name-tag'>方景行</span>：「這不是妳的責任。」\n\n你皺了皺眉，決定說實話。\n\n<span class='name-tag'>方景行</span>：「妳太在意別人的感受了，這樣只會消耗妳自己。他們的問題應該由他們自己解決。」\n\n溫若雨愣了一下，似乎被說中了心事。\n\n<span class='name-tag'>溫若雨</span>：「也許你是對的...我總是習慣把別人的問題背在身上。」",
        "choices": [
            {
                "text": "時間流逝",
                "nextNode": "c2_sunset_connection"
            }
        ],
        "bg": "library_sunny.png"
    },
    "c2_sunset_connection": {
        "text": "【七、初次連結】\n\n圖書館外，天色漸漸暗了下來。夕陽的餘暉將自習區染成一片金黃。\n\n你們依然坐在那裡，桌上的咖啡已經涼了。\n\n你們聊了很多。關於為什麼讀電機系，關於未來，關於恐懼。\n\n這是一次很奇怪的對話，兩個習慣封閉自己的人，卻在這個下午向彼此敞開了一點點心扉。",
        "choices": [
            {
                "text": "結束對話",
                "nextNode": "c2_end"
            }
        ],
        "bg": "library_sunset.png",
        "bgm": "daily.mp3"
    },
    "c2_end": {
        "text": "溫若雨起身離開時，你看著她的背影，心中湧起一股複雜的情緒。\n\n你不知道這種感覺是什麼，只知道這個下午，你第一次覺得，也許打開心門並不是一件那麼可怕的事情。\n\n(第二章 完)",
        "choices": [
            {
                "text": "保存進度並返回標題",
                "nextNode": "start"
            }
        ],
        "bg": "library_sunset.png"
    }
};