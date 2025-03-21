var issues = [
	{'title_en':'Fail to submit his/her assignments on time','title_zh':'無法準時遞交課業','title_cn':'无法准时递交课业'},
	{'title_en':'Produce assignments with poor quality','title_zh':'課業質素欠佳','title_cn':'课业质素欠佳'},
	{'title_en':'Fail to manage tests and exams','title_zh':'無法應付測驗和考試','title_cn':'无法应付测验和考试'},
	{'title_en':'Respond to classroom dynamics in emotional and unproductive ways','title_zh':'以情緒化或失效的方法去處理課堂中的小矛盾','title_cn':'以情绪化或失效的方法去处理课堂中的小矛盾'},
	{'title_en':'Look lacking energy or show no motivation','title_zh':'看似毫無精力或缺乏學習動機','title_cn':'看似毫无精力或缺乏学习动机'},
	{'title_en':'Look anxious or withdrawn','title_zh':'看似焦慮不安或退縮','title_cn':'看似焦虑不安或退缩'},
	{'title_en':'Look exceptionally weird','title_zh':'看來十分古怪','title_cn':'看来十分古怪'},
	{'title_en':'Fail to concentrate during the lecture','title_zh':'無法集中上課','title_cn':'无法集中上课'},
	{'title_en':'Often come late or not come to lesson','title_zh':'經常上課遲到','title_cn':'经常上课迟到'},
	{'title_en':'Often monopolise the class','title_zh':'佔據課堂上的討論','title_cn':'占据课堂上的讨论'},
	{'title_en':'Behave rudely in class','title_zh':'在課堂中顯得無禮','title_cn':'在课堂中显得无礼'}
];

var problem = {
	"1": {
		"questionnaire": "1,5,6,9,12",
		"question": "Can he/she submit his/her assignments on time?",
		"title_en": "Fail to submit assignments on time",
		"title_zh": "無法準時遞交課業",
		"title_cn": "无法准时递交课业",
		"intro_en": "Being able to submit the assignments on time is a basic requirement for a university student. It helps the lecturer to understand whether the students can meet the learning pace of the course.\nIf a student often fails to submit his/her assignments on time, it may mean that he/she struggles when he/she is doing the assignments for some reasons, including poor attention or reading and writing problems. Some students often procrastinate on their work until the last minutes before the deadline. Some also find it difficult to arrange their time to do their assignment. Students with depression may lack energy to work or to seek help.",
		"intro_zh": "能準時遞交課業時對大學生最基本的要求。此有助導師了解學生是否跟得上課堂的教學進度。\n假如學生無法準時遞交他/她的課業，此或反映他/她在完成課業時有某些困難，例如缺乏專注或有閱讀和書寫困難。有些學生常常拖延他們的工作直至限期前的最後一刻。亦有些學生對於安排時間去做自己的課業顯得十分困難。一些有抑鬱症的同學也會缺乏精力工作或尋求協助。",
		"intro_cn": "能准时递交课业时对大学生最基本的要求。此有助导师了解学生是否跟得上课堂的教学进度。\n假如学生无法准时递交他/她的课业，此或反映他/她在完成课业时有某些困难，例如缺乏专注或有阅读和书写困难。有些学生常常拖延他们的工作直至限期前的最后一刻。亦有些学生对于安排时间去做自己的课业显得十分困难。一些有抑郁症的同学也会缺乏精力工作或寻求协助。",
		"suggestion":{}
	},
	"2a": {
		"questionnaire": "3,7,12",
		"question": "Lack of organisation",
		"title_en": "Produce assignments with poor quality - Lack of organisation",
		"title_zh": "課業質素欠佳 - 缺乏組織",
		"intro_en": "A good piece of work should have clear structure and coherent arguments. Poor organisation such as illogical presentation of ideas or excessive errors would lead to ineffective communication of one’s ideas.\nIf a student produces assignments with poor organisation skills, it may mean that he/she has weak executive functions like planning and prioritising, poor general organisation or difficulties with presenting with text.",
		"intro_zh": "一份好的課業應有清晰的結構和前後呼應的論點。如欠缺了組織會令內容無法以有邏輯的方法表達，或產生大量錯誤，令意念無法有效表達。\n假如學生在完成課業時缺乏應有的組織技巧，此或代表他/她有較差的執行功能，例如計劃和安排優次，較差的組織能力或對以文字表達有困難。",
		"title_cn": "课业质素欠佳 - 缺乏组织",
		"intro_cn": "一份好的课业应有清晰的结构和前后呼应的论点。如欠缺了组织会令内容无法以有逻辑的方法表达，或产生大量错误，令意念无法有效表达。\n假如学生在完成课业时缺乏应有的组织技巧，此或代表他/她有较差的执行功能，例如计划和安排优次，较差的组织能力或对以文字表达有困难。",
		"suggestion":{}
	},
	"2b": {
		"questionnaire": "1,12",
		"question": "Poor language",
		"title_en": "Produce assignments with poor quality - Poor language",
		"title_zh": "課業質素欠佳 - 語言運用欠佳",
		"intro_en": "Academic writing in university has heavy demand on effective language, reading and writing abilities. It is essential that a student can understand and use correct and appropriate words and sentences to demonstrate his/her thoughts and knowledge clearly in the assignment with basic essay structure.\nIf a student produces assignments with poor language use, it may mean that he/she has certain reading and writing difficulties, or if he/she is very careless and makes excessive errors, possibly related to poor attention.",
		"intro_zh": "大學課程中的學術性書寫對語言能力和讀寫能力有很高的要求。學生必須明白及能使用正確和恰當的詞彙及句子，以在課業中運用簡單文章結構去清晰表達自己的想法和知識。\n如果學生在課業中顯示較差的語文應用，此或代表他/她有一定程度的讀寫困難，又或代表他/她有專注問題而不小心犯下大量錯誤。",
		"title_cn": "课业质素欠佳 - 语言运用欠佳",
		"intro_cn": "大学课程中的学术性书写对语言能力和读写能力有很高的要求。学生必须明白及能使用正确和恰当的词汇及句子，以在课业中运用简单文章结构去清晰表达自己的想法和知识。\n如果学生在课业中显示较差的语文应用，此或代表他/她有一定程度的读写困难，又或代表他/她有专注问题而不小心犯下大量错误。",
		"suggestion":{}
	},
	"2c": {
		"questionnaire": "4,7,8,12",
		"question": "Lack of understanding of requirement/subject matters",
		"title_en": "Produce assignments with poor quality - Lack of understanding of requirement/subject matters",
		"title_zh": "課業質素欠佳 - 未能理解課業要求或科目內容",
		"intro_en": "Some students may pay much effort on their assignments but produce poor pieces of work. Teachers can easily judge that the students do not know what the assignment requests are, or even if they know, they fail to relate the assignment to the concepts they have learnt from the lecture.\nSome students fail to get the correct information from the textbook/notes/reading materials/other resources for the assignment. It may be caused by their problems in the reading process, their abilities to locate key points from learning materials, and to organise them.",
		"intro_zh": "有些學生花了不少努力去完成課業但卻換來很差的結果。老師有時可以判斷這些學生看來不太明白課業的要求，或者即使他們知道，也不理解課業與在課堂中學到的哪些概念有關。\n有些學生無法從課本/筆記/閱讀資料/其它資源得到與課業有關的正確資訊。此可能與他們的閱讀過程問題有關，或受他們是否能在學習材料中找到重點並組織起來所影響。",
		"title_cn": "课业质素欠佳 - 未能理解课业要求或科目内容",
		"intro_cn": "有些学生花了不少努力去完成课业但却换来很差的结果。老师有时可以判断这些学生看来不太明白课业的要求，或者即使他们知道，也不理解课业与在课堂中学到的哪些概念有关。\n有些学生无法从课本/笔记/阅读资料/其它资源得到与课业有关的正确资讯。此可能与他们的阅读过程问题有关，或受他们是否能在学习材料中找到重点并组织起来所影响。",
		"suggestion":{}
	},
	"2d": {
		"questionnaire": "1,6,12",
		"question": "Insufficient content",
		"title_en": "Produce assignments with poor quality - Insufficient content",
		"title_zh": "課業質素欠佳 - 內容不足",
		"intro_en": "Each assignment has certain expectation on its length to be submitted, even though the minimum word count may not be specified. It is normal to have such expectation as it needs enough length and quantity of work to demonstrate the width and depth of the knowledge.\nSome students may be judged as being lazy when they fail to fulfil the expectation. However, the laziness can also be a result of the inability to concentrate on work and poor self-monitoring skills. Some students with learning difficulties may also find it hard to start working on written assignments.",
		"intro_zh": "即使沒有特別標明所需字數也好，每一份課業也有內容的長度上的一定要求。一般來說，課業需要一定的長度和工作量去展示學生對知識所理解的闊度和深度。\n當有些學生無法達到此要求時會被認為是特別懶散。可是懶惰也可以是無法專注於工作和缺乏自我管理能力的結果。有些有學習困難的學生也會對要完成需要書寫的課業顯得特別困難。",
		"title_cn": "课业质素欠佳 - 内容不足",
		"intro_cn": "即使没有特别标明所需字数也好，每一份课业也有内容的长度上的一定要求。一般来说，课业需要一定的长度和工作量去展示学生对知识所理解的阔度和深度。\n当有些学生无法达到此要求时会被认为是特别懒散。可是懒惰也可以是无法专注于工作和缺乏自我管理能力的结果。有些有学习困难的学生也会对要完成需要书写的课业显得特别困难。",
		"suggestion":{}
	},
	"3a": {
		"questionnaire": "1,4,5,6",
		"question": "Seem not prepared",
		"title_en": "Fail to manage tests and exams - Seem not prepare",
		"title_zh": "無法應付測驗和考試 - 看似沒有準備",
		"intro_en": "The academic demands at tertiary level are not easy for many students. They have to spend time to go over all hurdles in their learning, to understand the new concepts and to memorise facts. They need to be persistent to work against the frustration and boredom.\nSo, for students who are unable to spend quality time on preparing for tests and exams, it can be a result of the inability to concentrate on work and poor self-monitoring skills. Sometimes, students are unable to retain and retrieve subject contents from their memory, or not knowing how to start their revision.",
		"intro_zh": "大學程度的學術要求對許多學生來說也不是容易的事。他們要花許多時間去跨過在學習上的各種障礙，理解各種新概念和記憶許多不同的資訊。他們需要有一定的毅力去應付工作上的憂慮和沉悶。\n所以，對那些無法花時間好好為測驗和考試準備的學生，他們也許是缺乏了專注工作或管理自己的能力。有時候。他們亦可能無法記憶科目的內容或不知道應該如何開始溫習。",
		"title_cn": "无法应付测验和考试 - 看似没有准备",
		"intro_cn": "大学程度的学术要求对许多学生来说也不是容易的事。他们要花许多时间去跨过在学习上的各种障碍，理解各种新概念和记忆许多不同的资讯。他们需要有一定的毅力去应付工作上的忧虑和沉闷。\n所以，对那些无法花时间好好为测验和考试准备的学生，他们也许是缺乏了专注工作或管理自己的能力。有时候。他们亦可能无法记忆科目的内容或不知道应该如何开始温习。",
		"suggestion":{}
	},
	"3b": {
		"questionnaire": "1,4,7,8",
		"question": "Lack of understanding of question/subject matters",
		"title_en": "Fail to manage tests and exams - Lack of understanding of questions/subject matters",
		"title_zh": "無法應付測驗和考試 - 未能理解題目或科目內容",
		"intro_en": "Some students may pay much effort to prepare for tests and exams but get bad results. Teachers can easily judge that the students do not understand what the question demands, or even if they know, they fail to relate the question to the concepts they have learnt from the lecture.\nSome students fail to locate or understand the correct information from the textbooks/notes/reading materials/other resources for the tests. Some students may fail to remember the key points they have read and studied from the learning materials and to organise them to answer exam questions.",
		"intro_zh": "有些學生花了不少努力去為測驗和考試作準備但卻換來很差的結果。老師有時可以判斷這些學生看來不太明白課業的要求，或者即使他們知道，也不理解課業與在課堂中學到的哪些概念有關。\n有些學生無法從課本/筆記/閱讀資料/其它資源得到與測考內容有關的正確資訊。有些學生亦無法記憶從學習資料閱讀到的重點，並把它們組織起來去回答問題。",
		"title_cn": "无法应付测验和考试 - 未能理解题目或科目内容",
		"intro_cn": "有些学生花了不少努力去为测验和考试作准备但却换来很差的结果。老师有时可以判断这些学生看来不太明白课业的要求，或者即使他们知道，也不理解课业与在课堂中学到的哪些概念有关。\n有些学生无法从课本/笔记/阅读资料/其它资源得到与测考内容有关的正确资讯。有些学生亦无法记忆从学习资料阅读到的重点，并把它们组织起来去回答问题。",
		"suggestion":{}
	},
	"3c": {
		"questionnaire": "10",
		"question": "Test results not reflecting his/her performance in class or assignment",
		"title_en": "Fail to manage tests and exams - Test results not reflecting his/her true abilities",
		"title_zh": "無法應付測驗和考試 - 測驗成績未能反映他/她的真正能力",
		"intro_en": "There are many capable students who can produce quality assignments and be engaged in lessons with good responses, but they often fail to perform at their level in tests and exams. You are sure that they can manage the cognitive demands of the subject matter and can focus on their work, as demonstrated by their good work you received. So, it may not be an ability problem or motivation issue but something specifically related to what's happening during tests and exams.\nOne of the most possible reason can be an anxiety problem which is test specific. Too much anxiety can reduce the performance of work and sometimes even paralyse one's cognitive abilities. A student with anxiety problem should have some other symptoms which you may observe in daily life.",
		"intro_zh": "有許多有能力的學生雖然平日在功課和課堂上的表現十分之理想，但在測驗和考試時卻表現欠佳，似乎沒有發揮他們正常的表現。你可以從他們平日的好表現想像得到他們應該有足夠認知能力去應付科目知識的要求，亦能專注於工作。所以學生的問題未必與能力或動機有關，而可能是受著一些與測考有特別關係的問題所影響。\n其中一個可能是與考試有關的焦慮問題。太多的焦慮會影響到工作時的表現，有時甚至會癱瘓一個人的認知能力。如學生有焦慮問題，你可能在日常與他/她的接觸中都對其徵狀有所觀察。",
		"title_cn": "无法应付测验和考试 - 测验成绩未能反映他/她的真正能力",
		"intro_cn": "有许多有能力的学生虽然平日在功课和课堂上的表现十分之理想，但在测验和考试时却表现欠佳，似乎没有发挥他们正常的表现。你可以从他们平日的好表现想像得到他们应该有足够认知能力去应付科目知识的要求，亦能专注于工作。所以学生的问题未必与能力或动机有关，而可能是受着一些与测考有特别关系的问题所影响。\n其中一个可能是与考试有关的焦虑问题。太多的焦虑会影响到工作时的表现，有时甚至会瘫痪一个人的认知能力。如学生有焦虑问题，你可能在日常与他/她的接触中都对其征状有所观察。",
		"suggestion":{}
	},
	"3d": {
		"questionnaire": "3,8,12",
		"question": "Can he/she work with group project?",
		"title_en": "Fail to work with group project",
		"title_zh": "無法做好小組課業",
		"intro_en": "Group project is a teamwork which requires a student to communicate effectively with teammates, to do problem-solving by contributing his/her own skills and knowledge, and to manage his/her time to fit in others' working schedules out of his/her own personal tasks. Most of the time, a group project requires to be presented in a written format which demands one's writing skills.\nA student having problems with group projects may struggle with his/her social skills which fail him/her to discuss and cooperate with the teammates. He/she may also find it difficult to prioritise his/her work to match others' working pace. If a student has learning difficulties, he/she may produce poorer write-up for the project which disappoints the teammates.",
		"intro_zh": "小組課業是一個講求組員之間有效溝通，各人貢獻自己的技巧和知識去作解難，和大家努力管理好自己的時間去配合小組工作進度的一個集體活動。許多時候，小組課業也需要組員運用他們的寫作技巧將他們的想法和資訊以文字形式表達出來。\n假若學生對參與小組課業有困難，可能與他/她的社交能力問題有關，導致他/她未能與組員好好討論和合作。他/她亦可能對編排自己的工作去配合小組的工作進度顯得十分困難。如果學生自己本身有學習上的困難，他/她所編寫出來的小組課業也或許未能滿足到小組的要求。",
		"title_cn": "无法做好小组课业",
		"intro_cn": "小组课业是一个讲求组员之间有效沟通，各人贡献自己的技巧和知识去作解难，和大家努力管理好自己的时间去配合小组工作进度的一个集体活动。许多时候，小组课业也需要组员运用他们的写作技巧将他们的想法和资讯以文字形式表达出来。\n假若学生对参与小组课业有困难，可能与他/她的社交能力问题有关，导致他/她未能与组员好好讨论和合作。他/她亦可能对编排自己的工作去配合小组的工作进度显得十分困难。如果学生自己本身有学习上的困难，他/她所编写出来的小组课业也或许未能满足到小组的要求。",
		"suggestion":{}
	},
	"4": {
		"questionnaire": "2,8",
		"question": "Does he/she respond to classroom dynamics in emotional and unproductive ways?",
		"title_en": "Respond to classroom dynamics in emotional and unproductive ways",
		"title_zh": "以情緒化或失效的方法去處理課堂中的小矛盾",
		"intro_en": "An effective lesson relies on the course climate which promotes positive communication, productive exchange of ideas and positive motivation. If a student has difficulty with maintaining a positive attitude in a classroom or with challenge interaction, it not only affects the course climate but also discourages how much he/she can get from the lesson.\nStudents with such problem may have weak understanding of common social rules or have lower sensitivity of how others feel. Even if they have the relevant social skills, some of them may have poor control of their emotion and urge to express their views at an inappropriate time.",
		"intro_zh": "有效教學建基於良好的課堂氣氛，從而產生正面的溝通、具建設性的意見交流及正面學習動機。如果學生難以在課堂中保持正面態度甚至有引起挑戰性互動，此不單影響課堂的氣氛，更影響到他/她從課堂中所得到的應有知識。\n有此困難的學生，可能較難理解一般的社交規則，亦對其他人的感受有較低觸覺。即使他們有些時候有足夠的社交技巧，但部分可能較難控制自己的情緒，或在不適當的時候過度渴望表達自己的意見。",
		"title_cn": "以情绪化或失效的方法去处理课堂中的小矛盾",
		"intro_cn": "有效教学建基于良好的课堂气氛，从而产生正面的沟通、具建设性的意见交流及正面学习动机。如果学生难以在课堂中保持正面态度甚至有引起挑战性互动，此不单影响课堂的气氛，更影响到他/她从课堂中所得到的应有知识。\n有此困难的学生，可能较难理解一般的社交规则，亦对其他人的感受有较低触觉。即使他们有些时候有足够的社交技巧，但部分可能较难控制自己的情绪，或在不适当的时候过度渴望表达自己的意见。",
		"suggestion":{}
	},
	"5": {
		"questionnaire": "1,9",
		"question": "Does he/she look lacking energy or show no motivation?",
		"title_en": "Look lacking energy or show no motivation",
		"title_zh": "看似毫無精力或缺乏學習動機",
		"intro_en": "The curriculum in university is cognitively high demanding that students need much energy and motivation to help them overcome different difficulties they face in their study. If a student is lacking energy to participate in class or showing little motivation on his/her work, he/she may gain much less than his/her peers from the lesson and may keep procrastinating all assignments and revisions.\nSimply describing the student as having poor learning attitude may not be helpful to support him/her. The underlying problem can be alarming. For example, having low energy level is a typical symptoms of depression, which is one of the most common mental health illness among young adults. Students with poor attention also have much disturbance on their working mood and sleeping habit which directly impacts on how they behave in the classroom.",
		"intro_zh": "大學程度的學術要求對許多學生來說也不是容易的事。他們要有大量精力及動力去協助他們跨過在學習上的各種障礙。如果學生缺乏精力去參與課堂或沒有甚麼動力去完成他/她的工作，他/她會比其他朋輩從課堂中收穫更少，亦很有可能拖延所有的功課和溫習。\n純粹把這類學生描述成缺乏良好學習態度並不會幫助到他/她。背後隱藏的問題也許更是一些值得我們擔心的問題。例如，缺乏精力本身就是抑鬱症的其中一種典型徵狀，而抑鬱症亦是這個年紀的年輕人常見的精神健康問題。一些有專注問題的學生，他們的工作情緒和睡眠習慣亦常受到影響，並直接影響到他們在課堂上的表現。",
		"title_cn": "看似毫无精力或缺乏学习动机",
		"intro_cn": "大学程度的学术要求对许多学生来说也不是容易的事。他们要有大量精力及动力去协助他们跨过在学习上的各种障碍。如果学生缺乏精力去参与课堂或没有什么动力去完成他/她的工作，他/她会比其他朋辈从课堂中收获更少，亦很有可能拖延所有的功课和温习。\n纯粹把这类学生描述成缺乏良好学习态度并不会帮助到他/她。背后隐藏的问题也许更是一些值得我们担心的问题。例如，缺乏精力本身就是抑郁症的其中一种典型征状，而抑郁症亦是这个年纪的年轻人常见的精神健康问题。一些有专注问题的学生，他们的工作情绪和睡眠习惯亦常受到影响，并直接影响到他们在课堂上的表现。",
		"suggestion":{}
	},
	"6": {
		"questionnaire": "10",
		"question": "Does he/she look anxious or withdrawn?",
		"title_en": "Look anxious or withdrawn",
		"title_zh": "看似焦慮不安或退縮",
		"intro_en": "University students have much autonomy in their study, meanwhile, they need to take the active role to learn and approach different learning opportunity, including discussion in class, being active in group work and seeking advice from tutors and lecturers.\nStudents with anxiety problem may become very anxious in different situations, not limited to social situations. They may hesitate to put themselves into situations in which they feel anxious or even get panicked. Thus, they may withdraw themselves from such situations and avoid a range of activities.",
		"intro_zh": "大學生一方面在學習上有許多自主性，同時他們亦要主動學習和珍惜不同的學習機會，包括參與課堂上的討論、在小組工作上積極參與及主動向導師尋求意見。\n學生如果有焦慮問題，他們在不同的場合顯得十分緊張，即使並非一些典型的社交場合。他們對是否參與這些會令自己緊張甚至驚恐的場合會極度猶豫，所以他們甚至會逃避這些場合亦令自己無法參與許多活動。",
		"title_cn": "看似焦虑不安或退缩",
		"intro_cn": "大学生一方面在学习上有许多自主性，同时他们亦要主动学习和珍惜不同的学习机会，包括参与课堂上的讨论、在小组工作上积极参与及主动向导师寻求意见。\n学生如果有焦虑问题，他们在不同的场合显得十分紧张，即使并非一些典型的社交场合。他们对是否参与这些会令自己紧张甚至惊恐的场合会极度犹豫，所以他们甚至会逃避这些场合亦令自己无法参与许多活动。",
		"suggestion":{}
	},
	"7": {
		"questionnaire": "8,11",
		"question": "Does he/she look exceptionally weird?",
		"title_en": "Look exceptionally weird",
		"title_zh": "看來十分古怪",
		"intro_en": "If a student is perceived to be \"weird\" by others, there must be something which is worth to be concerned. It is important to try talking to him/her to get more samples of responses to understand him/her, especially the way he/she thinks and how he/she perceives things happening around.\nSocial functioning is one of the concerns as it directly affects how the student interacts with others. Severe mental health problem is another area of concerns as it harms one's overall functioning.",
		"intro_zh": "如果一個學生被描述成「古怪」，那他/她必然有一些值得令人關注的地方。最重要的是盡量嘗試與他/她溝通，從其回應中得到了解他/她的機會，特別是他/她的思想和他/她是如何理解身邊發生的事。\n社交功能是其中一個最影響學生與其他人互動的關注點。另一值得留意的是看看學生是否有嚴重精神健康問題，因這必然會影響到他/她的整體功能。",
		"title_cn": "看来十分古怪",
		"intro_cn": "如果一个学生被描述成「古怪」，那他/她必然有一些值得令人关注的地方。最重要的是尽量尝试与他/她沟通，从其回应中得到了解他/她的机会，特别是他/她的思想和他/她是如何理解身边发生的事。\n社交功能是其中一个最影响学生与其他人互动的关注点。另一值得留意的是看看学生是否有严重精神健康问题，因这必然会影响到他/她的整体功能。 ",
		"suggestion":{}
	},
	"8": {
		"questionnaire": "1,8,11",
		"question": "Can he/she concentrate during the lecture?",
		"title_en": "Fail to concentrate during the lecture",
		"title_zh": "無法集中上課",
		"intro_en": "There are many reasons for a student to be unable to concentrate in the lesson. Of course, being born to have attention deficit can be one of the reasons. Some students with Autism Spectrum Disorder also find it difficult to focus in the lesson as they spend their attention on their own interests instead of what the lecturer expects. This is due to their restricted behaviour pattern.\nSevere mental health problems can also damage one's attention as they may seriously affect the brain functions and disturb one's emotion.",
		"intro_zh": "學生在課堂中無法專注有許多原因，本身有專注力問題當然是其中一個理由。有些有自閉症譜系障礙的學生亦常難以在課堂中專注，因為他們常常把注意力放到自己獨特的興趣之上，而非導師所期望的事情之上，而這與他們的沉溺特質行為有關。\n一些嚴重的精神健康問題亦可以損害一個人的專注，因為它們會嚴重影響大腦的功能及其的情緒。",
		"title_cn": "无法集中上课",
		"intro_cn": "学生在课堂中无法专注有许多原因，本身有专注力问题当然是其中一个理由。有些有自闭症谱系障碍的学生亦常难以在课堂中专注，因为他们常常把注意力放到自己独特的兴趣之上，而非导师所期望的事情之上，而这与他们的沉溺特质行为有关。\n一些严重的精神健康问题亦可以损害一个人的专注，因为它们会严重影响大脑的功能及其的情绪。",
		"suggestion":{}
	},
	"9": {
		"questionnaire": "1,3,9,11",
		"question": "Does he/she often come late or not come to lesson?",
		"title_en": "Often come late or does not come to lesson",
		"title_zh": "經常上課遲到",
		"intro_en": "Being late to lesson is very common among university students. Many of them are still struggling with manging their daily schedule to maintain work-life balance. However, there are students who have more serious attendance problem, which often has a special reason behind it.\nThe most typical reason is the problem with planning and prioritising tasks such that the students cannot manage time for lessons. Some students may have attention problem so they fail to follow their plan even they have a good one.\nFor serious cases, they may have mental health problem which affects their functioning to attend school.",
		"intro_zh": "上課遲到在大學生當中是十分普遍，而他們當中有不少對管理自己的日程和保持生活工作平衡顯得十分困難。但是當中亦有不少學生有更嚴重的缺席問題，此背後往往都有一些很特別的理由。\n其中最典型的原因是他們無法計劃及將工作分優次，令他們無法騰出時間上課。有些學生亦可能有專注問題令他們無法按自己的計劃做事。\n有些嚴重的個案，學生可能有精神健康問題，令他們沒有足夠的能力處理好自己和上課。",
		"title_cn": "经常上课迟到",
		"intro_cn": "上课迟到在大学生当中是十分普遍，而他们当中有不少对管理自己的日程和保持生活工作平衡显得十分困难。但是当中亦有不少学生有更严重的缺席问题，此背后往往都有一些很特别的理由。\n其中最典型的原因是他们无法计划及将工作分优次，令他们无法腾出时间上课。有些学生亦可能有专注问题令他们无法按自己的计划做事。\n有些严重的个案，学生可能有精神健康问题，令他们没有足够的能力处理好自己和上课。",
		"suggestion":{}
	},
	"10": {
		"questionnaire": "2,8",
		"question": "Does he/she monopolise the class?",
		"title_en": "Monopolise the class",
		"title_zh": "佔據課堂上的討論",
		"intro_en": "Although most teachers welcome questions and discussion in the lesson, some students may express too much in class or have strong opinions which disturb the discussion or course climate. It is somehow difficult to stop the students as teachers do not want to discourage students from expressing their ideas, but it is also difficult to let the students be aware of the impact of monopolising the class.\nStudents with such problem may have weak understanding of common social rules or have lower sensitivity of how others feel. Even if they have the relevant social skills, some of them may have poor control of their emotion and urge to express their views at a wrong time or inappropriate way.",
		"intro_zh": "即使許多老師都歡迎學生在課堂上發問及參與討論，有一些學生卻在課堂中發言太多或有一些強烈的意見，最後影響到討論或課堂氣氛。導師會發覺有時很難去阻止學生發言，因為不太想令學生放棄表達意見，但同時亦難以讓學生明白自己佔據課堂太多時間。\n有此困難的學生，可能對較難理解一般的社交規則，亦對其他人的感受有較低觸覺。即使他們有些時候有足夠的社交技巧，但部分可能較難控制自己的情緒，或在不適當的時候過度渴望表達自己的意見。",
		"title_cn": "占据课堂上的讨论",
		"intro_cn": "即使许多老师都欢迎学生在课堂上发问及参与讨论，有一些学生却在课堂中发言太多或有一些强烈的意见，最后影响到讨论或课堂气氛。导师会发觉有时很难去阻止学生发言，因为不太想令学生放弃表达意见，但同时亦难以让学生明白自己占据课堂太多时间。\n有此困难的学生，可能对较难理解一般的社交规则，亦对其他人的感受有较低触觉。即使他们有些时候有足够的社交技巧，但部分可能较难控制自己的情绪，或在不适当的时候过度渴望表达自己的意见。",
		"suggestion":{}
	},
	"11": {
		"questionnaire": "2,8,11",
		"question": "Does he/she behave rudely in class?",
		"title_en": "Behave rudely in class",
		"title_zh": "在課堂中顯得無禮",
		"intro_en": "Mutual trust and good relationship among lecturers and students are very important to maintain positive course climate and students' learning motivation. Even if there is only one student having behavioural problem in the lesson, damage to class can be great and long-lasting.\nStudents with such problem may have weak understanding of common social rules or have lower sensitivity of how others feel. Some of them have poor control of their emotion and are even with mental health problem which affect their emotion and social functioning.",
		"intro_zh": "導師和學生之間的互信和良好關係對保持良好課堂氣氛和學生的學習動機十分重要。即使只有一個學生在課堂中有行為問題，亦會對課堂造成破壞甚至有深遠的影響。\n有此困難的學生，可能較難理解一般的社交規則，亦對其他人的感受有較低觸覺。他們有些較難控制自己的情緒，甚至部分更有精神健康問題而影響到情緒和社交功能。",
		"title_cn": "在课堂中显得无礼",
		"intro_cn": "导师和学生之间的互信和良好关系对保持良好课堂气氛和学生的学习动机十分重要。即使只有一个学生在课堂中有行为问题，亦会对课堂造成破坏甚至有深远的影响。\n有此困难的学生，可能较难理解一般的社交规则，亦对其他人的感受有较低触觉。他们有些较难控制自己的情绪，甚至部分更有精神健康问题而影响到情绪和社交功能。",
		"suggestion":{}
	}
};


var questionnaire = {
  "1": {
    "title_en": "Attention",
    "title_zh": "專注力",
    "intro_en": "Attention is important for successful learning because it plays a key role in memory and the mechanisms ensure successful retention. There are several definitions of attention but all highlight the process of selecting task-relevant information and minimising irrelevant information. It’s also about switching from one information stream to another, often quite rapidly.\nA student with attention problem usually fails to sustain on his/her schoolwork. He/she has problem attend to details, and has low awareness of time passing for time management, etc. The problem affects the student's academic performance and achievement, which is caused by difficulties starting and completing tasks, disorganisation, problems remembering assignments, difficulty memorising facts, and trouble working on papers.",
    "intro_zh": "專注力對學習極為重要，因為它對記憶及確保資訊能長期停留在腦海內扮演著極為重要的角色。專注有許多不同的定義，但大部分都強調大腦是否能在眼前揀選與工作相關而排除無關的資訊，同時亦強調專注是否能快速從一個資訊轉換到另一個之上。\n一個有專注問題的學生通常都很難集中精神在他/她的課業之上。他/她會難以留心細節，或難以察覺時間的流逝造成較差的時間管理等等。此問題會影響到學生的學術表現，因他/她會常常忘記開始和完成工作、組織力差、忘記要交功課、較難記住學習內容和難以用文字表達想法。",
	"title_cn": "专注力",
    "intro_cn": "专注力对学习极为重要，因为它对记忆及确保资讯能长期停留在脑海内扮演着极为重要的角色。专注有许多不同的定义，但大部分都强调大脑是否能在眼前拣选与工作相关而排除无关的资讯，同时亦强调专注是否能快速从一个资讯转换到另一个之上。\n一个有专注问题的学生通常都很难集中精神在他/她的课业之上。他/她会难以留心细节，或难以察觉时间的流逝造成较差的时间管理等等。此问题会影响到学生的学术表现，因他/她会常常忘记开始和完成工作、组织力差、忘记要交功课、较难记住学习内容和难以用文字表达想法。"
  },
  "2": {
    "title_en": "Response Inhibition",
    "title_zh": "反應抑制",
    "intro_en": "Response inhibition is the ability to inhibit or control impulsive/automatic responses, and create responses by using attention and reasoning. This cognitive ability is one of our executive functions and contributes to anticipation, planning, and goal setting. Inhibition or inhibitory control blocks behaviours and stops inappropriate automatic reactions, changing one response to a better, more thought-out response adapted to the situation.\nIf a student has poor response inhibition, he/she may be distracted by slight stimulations, which drags him/her away from the work. He/she may have difficulty with managing urges which impacts the performance in academic tasks or the behaviours in social situations.",
    "intro_zh": "反應抑制是指去抑制或控制衝動和自動反應的能力，同時運用專注和邏輯去產生反應。此認知能力是其中一種執行功能，它同時協助我們進行預測、計劃及設定目標。反應抑制功能協助管束行為和制止不適當的自動反應，並改變我們的回應，令我們可以產生對某情況更好更連貫的反應。\n假若學生有較差的反應抑制能力，他/她會較容易被小小刺激導致分心，令他/她無法繼續工作。他/她亦難以抗拒自己的慾望，影響到他/她完成學習任務或在社交場合中的行為。",
    "title_cn": "反应抑制",
    "intro_cn": "反应抑制是指去抑制或控制冲动和自动反应的能力，同时运用专注和逻辑去产生反应。此认知能力是其中一种执行功能，它同时协助我们进行预测、计划及设定目标。反应抑制功能协助管束行为和制止不适当的自动反应，并改变我们的回应，令我们可以产生对某情况更好更连贯的反应。\n假若学生有较差的反应抑制能力，他/她会较容易被小小刺激导致分心，令他/她无法继续工作。他/她亦难以抗拒自己的欲望，影响到他/她完成学习任务或在社交场合中的行为。"
  },
  "3": {
    "title_en": "Planning & Prioritising",
    "title_zh": "計劃及安排優次",
    "intro_en": "Planning and prioritising is one of the executive functions which helps one to identify and focus on the order in which things need to be accomplished. It is especially important when there are more than two to three tasks or points to be handled at the same time. To keep things neat and logical, one has to prioritise what needs to be completed and make a plan to do so.\nIf a student is lacking these skills, he/she may get frustrated and overwhelmed easily over his/her works or important tasks in daily life. This can negatively impact the time spent on his/her work, his/her grades, and, even creating troubles which affect the relationships with peers and teachers.",
    "intro_zh": "計劃及安排優次是執行功能中的其中一種。它協助我們辨別和專注於如何完成事情的先後次序。它在我們需要顧及和完成多於兩至三件任務時顯得更為重要。當我們需要保持做事有條理和有邏輯，更需要安排好各樣事情的優先次序並作出好好規劃。\n假若學生缺乏這些技巧，當他們要在日常生活中顧及不同工作或一些重要的任務時會感到惆悵甚至吃不消。此亦會影響到他們最後要花多少時間在工作上以及學業分數，甚至因此產生許多問題而影響到他們與朋輩和老師的關係。",
    "title_cn": "计划及安排优次",
    "intro_cn": "计划及安排优次是执行功能中的其中一种。它协助我们辨别和专注于如何完成事情的先后次序。它在我们需要顾及和完成多于两至三件任务时显得更为重要。当我们需要保持做事有条理和有逻辑，更需要安排好各样事情的优先次序并作出好好规划。\n假若学生缺乏这些技巧，当他们要在日常生活中顾及不同工作或一些重要的任务时会感到惆怅甚至吃不消。此亦会影响到他们最后要花多少时间在工作上以及学业分数，甚至因此产生许多问题而影响到他们与朋辈和老师的关系。"
  },
  "4": {
    "title_en": "Working Memory",
    "title_zh": "工作記憶",
    "intro_en": "Working memory is commonly associated with academics like reading and math. In part because both of those skills require us to recall information like letter sounds and math facts. Working memory can also involve our ability to follow multiple-step instructions since we need to remember all parts of the task while we complete the steps in order. Working memory also connected to other executive functioning skills. While we may think of it as short term recall of information, working memory also requires us to apply it in complicated tasks. It helps reminding one the steps to complete a task and all details for achieving with best outcomes.\nA student with poor working memory may often forget the instructions or can’t recall the information to complete the task. He/she may seem like escaping or refusal to complete the job but the challenge with remembering the right information can be the truth behind the problem. Often missing personal belongings or mixing up time of appointment due to poor memory can also create lots of obstacles in daily life.",
    "intro_zh": "工作記憶與學業表現有密切的關係，例如閱讀和數學。主要原因是由於這兩種技能都需要我們記憶許多重要的資訊，例如字的讀音和一些可以背誦的數學理論或公式。工作記憶亦聯繫到其他執行功能。它當然與我們短暫記憶有關，而我們在進行較複雜的活動時亦需要應用，例如我們需要有意識記住完成任務的每一個步驟和所有能令我們做得更加好的細微地方。\n一個學生有較差的工作記憶會常常忘記指示或無法回憶與完成工作有關的資訊。他/她或會看似逃避或拒絕完成工作，但事實上常常忘記正確資訊才是導致這問題的真正背後原因。常常因記憶力差而遺失個人物品或混淆了約會時間亦會在日常生活中產生很多困難。",
    "title_cn": "工作记忆",
    "intro_cn": "工作记忆与学业表现有密切的关系，例如阅读和数学。主要原因是由于这两种技能都需要我们记忆许多重要的资讯，例如字的读音和一些可以背诵的数学理论或公式。工作记忆亦联系到其他执行功能。它当然与我们短暂记忆有关，而我们在进行较复杂的活动时亦需要应用，例如我们需要有意识记住完成任务的每一个步骤和所有能令我们做得更加好的细微地方。\n一个学生有较差的工作记忆会常常忘记指示或无法回忆与完成工作有关的资讯。他/她或会看似逃避或拒绝完成工作，但事实上常常忘记正确资讯才是导致这问题的真正背后原因。常常因记忆力差而遗失个人物品或混淆了约会时间亦会在日常生活中产生很多困难。"
  },
  "5": {
    "title_en": "Task Initiation",
    "title_zh": "開展工作",
    "intro_en": "Task initiation is the ability to start a task. It includes overcoming procrastination and getting started on tasks even if you don’t want to do them.  It also includes various skills, including independently generating ideas, solving problems, and responding to instructions without needing others’ support.\nA student who struggles with task initiation are frequently getting in trouble for not doing their work. While at first glance this can appear as intentional avoidance behaviour, but in fact it is the lack of skills to get oneself going. He/she may need many reminders from others to start a task, delay chores and homework until he/she needs to rush to finish on time, and frequently ask for help even with simple tasks.",
    "intro_zh": "開展工作是指開始實行一件任務的能力。它包括在不想工作的時候是否能克服拖延和確實開始工作。此亦包括多種不同技能，例如能獨自想出新主意，解決困難，和在沒有別人協助下遵從指示。\n假如學生對開展工作非常困難，必經常無法完成自己的工作。他們必然會被認為是故意逃避，但事實上他們是缺乏了適當的技巧去令自己做好本份。他們需要別人更多的提示才能開始任務，亦常常留待最後一刻才匆忙完成手上的工作，或即使做簡單任務時也常常需要找人幫忙。",
    "title_cn": "开展工作",
    "intro_cn": "开展工作是指开始实行一件任务的能力。它包括在不想工作的时候是否能克服拖延和确实开始工作。此亦包括多种不同技能，例如能独自想出新主意，解决困难，和在没有别人协助下遵从指示。\n假如学生对开展工作非常困难，必经常无法完成自己的工作。他们必然会被认为是故意逃避，但事实上他们是缺乏了适当的技巧去令自己做好本份。他们需要别人更多的提示才能开始任务，亦常常留待最后一刻才匆忙完成手上的工作，或即使做简单任务时也常常需要找人帮忙。"
  },
  "6": {
    "title_en": "Self-monitoring",
    "title_zh": "自我監察",
    "intro_en": "The executive functioning skill of self-monitoring reflects how we understand our behaviours and how we adjust to make changes for the future. Self-monitoring  can include both work-checking behaviours (reviewing mistakes, fixing errors, etc.) and social behaviours (responding to social norms, situational awareness, apologising, etc.). It involves not only observing our behaviours but also how they impact oneself and others around us.\nA student with problem in self-monitor isn't always able to set a goal and display effort towards completing it. He/she may stop mid-way through a task and do not finish, and may turn in incomplete homework or hastily completed work or not hand it in at all. In social situations, he/she may struggle to recognise when his/her problem behaviours negatively impact others.",
    "intro_zh": "自我監察這種執行功能反映了我們有多了解自己的行為和如何調節自己為將發生的事作出改變。自我監察包括檢查自己的工作行為（檢查錯誤、修訂問題等等）和社交行為（按社交常規作回應、留意不同的情境、道歉等等)。它不但涉及觀察自己的行為，亦同時留意到此行為如何影響到自己和身邊的人。\n假若學生缺乏自我監察的能力，必常常無法定下目標及切實努力完成。他/她或會在工作中途停下來而不把它盡快做好，或會提交一份未完成的功課或把作業做得十分草率，甚至完成不了。在社交場合，他/她或會難以意識到自己的問題行為會怎樣影響到其他人。",
    "title_cn": "自我监察",
    "intro_cn": "自我监察这种执行功能反映了我们有多了解自己的行为和如何调节自己为将发生的事作出改变。自我监察包括检查自己的工作行为（检查错误、修订问题等等）和社交行为（按社交常规作回应、留意不同的情境、道歉等等)。它不但涉及观察自己的行为，亦同时留意到此行为如何影响到自己和身边的人。\n假若学生缺乏自我监察的能力，必常常无法定下目标及切实努力完成。他/她或会在工作中途停下来而不把它尽快做好，或会提交一份未完成的功课或把作业做得十分草率，甚至完成不了。在社交场合，他/她或会难以意识到自己的问题行为会怎样影响到其他人。"
  },
  "7": {
    "title_en": "Organisation",
    "title_zh": "組織力",
    "intro_en": "Organisation skills are the ability to efficiently arrange materials or thoughts in an orderly fashion. Organisation is vital to a student’s work as it allows the student to present ideas in a concise way or keep track of tasks to be completed. It also allows students to link up information in an orderly manner which facilitates them to generate higher-order outcomes.\nIf a student is weak in his/her organisation skills, he/she may see and manage information in a disorganised manner. This can lead to inability to present ideas in a meaningful way. Severe deficit in organisation skills may also lead to forgetfulness that the student often forgets important piece of information when his/her works, or loses his/her materials/belongings.",
    "intro_zh": "組織能力是指如何有效以有系統的方式處理不同材料和想法。組織力對學生工作十分重要，因其有助學生以簡潔的方式陳述意見，或逐步完成自己的工作。它亦有助學生以有條理的方法將不同的資訊聯繫起來，令他們能做出更高層次的工作效果。\n假若學生缺乏良好的組織力，他/她或難以用有系統的方法消化和處理資訊。此亦導致他/她無法用有意義的方法陳述自己的想法。嚴重的組織能力缺損也會令學生變得健忘，在工作時常常忘記重要的資訊，或經常遺失有用資源和個人物品。",
    "title_cn": "组织力",
    "intro_cn": "组织能力是指如何有效以有系统的方式处理不同材料和想法。组织力对学生工作十分重要，因其有助学生以简洁的方式陈述意见，或逐步完成自己的工作。它亦有助学生以有条理的方法将不同的资讯联系起来，令他们能做出更高层次的工作效果。\n假若学生缺乏良好的组织力，他/她或难以用有系统的方法消化和处理资讯。此亦导致他/她无法用有意义的方法陈述自己的想法。严重的组织能力缺损也会令学生变得健忘，在工作时常常忘记重要的资讯，或经常遗失有用资源和个人物品。"
  },
  "8": {
    "title_en": "Social Difficulties/Autism",
    "title_zh": "社交困難/自閉症",
    "intro_en": "Social skills help us connect with other people and have successful interactions. Trouble with these skills can cause problems in many areas of life. That includes school, work, home, and out in the community.  People with social difficulties may struggle to make conversation, seem out of sync, or behave in a way that turns off other people.\nA students with social difficulties may have trouble picking up on social cues and following social rules. That can make it hard for them to fit in, form friendships, and work with others. He/she may avoid interacting and feel isolated and alone with the struggles. He/she may also have low awareness of how their behaviours affect others or how things are perceived from others' perspective.  In some case, he/she may be enthusiastic in sharing only the specific topics he/she is interested in.\nMost children and adults with Autism Spectrum Disorder have poor social skills. Besides the struggles mentioned above, they usually have restricted interests and behaviours, which distract them from conversations and works. They may have more difficulties with understanding abstract or hypothetical content which adds another hurdle in their learning.",
    "intro_zh": "社交技巧協助我們與其他人連繫和作有意義的互動。缺乏社交技巧會在我們生活中產生許多問題，包括在學習、工作、家庭和社區當中。有社交能力困難的人會在對話中遇到很多障礙，無法與人同步，或被身邊的人疏遠。\n缺乏社交技巧的同學會難以掌握社交提示和遵從社交規則。此會令他們難以融入群體、結交朋友和與其他人合作。他/她或會因此問題逃避與人互動，和感到被孤立及孤獨。他/她亦會對自己的行為如何影響到其他人缺乏意識，或不明白此事在別人的角度中是什麼一回事。部份這類學生會過度熱衷於分享那些自己有興趣的話題。\n大部份有自閉症譜系障礙的兒童和成年人都有較差的社交技巧。除了上述的困難之外， 他們通常都有一些獨特而沉迷的興趣和行為，令到他們在對話和工作中常常分心。他們亦對理解抽象和假設性的內容顯得特別困難，令他們在學習中有另類障礙。",
    "title_cn": "社交困难/自闭症",
    "intro_cn": "社交技巧协助我们与其他人连系和作有意义的互动。缺乏社交技巧会在我们生活中产生许多问题，包括在学习、工作、家庭和社区当中。有社交能力困难的人会在对话中遇到很多障碍，无法与人同步，或被身边的人疏远。\n缺乏社交技巧的同学会难以掌握社交提示和遵从社交规则。此会令他们难以融入群体、结交朋友和与其他人合作。他/她或会因此问题逃避与人互动，和感到被孤立及孤独。他/她亦会对自己的行为如何影响到其他人缺乏意识，或不明白此事在别人的角度中是什么一回事。部份这类学生会过度热衷于分享那些自己有兴趣的话题。\n大部份有自闭症谱系障碍的儿童和成年人都有较差的社交技巧。除了上述的困难之外， 他们通常都有一些独特而沉迷的兴趣和行为，令到他们在对话和工作中常常分心。他们亦对理解抽象和假设性的内容显得特别困难，令他们在学习中有另类障碍。"
  },
  "9": {
    "title_en": "Depression",
    "title_zh": "抑鬱",
    "intro_en": "University is a common time for many people to experience the first signs of depression. Depression is usually accompanied by feelings of sadness or anxiety. It’s important to note that there isn’t one single cause of depression, but there are several common factors that are noted among university students which include poor adaptation to new environment, personality and peer relationship.\nDepression can damage a student's psychological well-being. His/her academic performance may suffer as a result given lacking energy to work is one of the major signs of depression. His/her cognitive functions may be impacted due to tiredness from insomnia or lack of appetite. Social life may be harmed from withdrawal due to depression.\nDepressed students are at a greater risk of developing problems such as substance abuse. Depression is also the biggest risk factor for suicidal youth. If you recognise symptoms of depression from any student, it requires immediate action to seek help from professional and appropriate resources.",
    "intro_zh": "大學是常見出現抑鬱症症狀的階段，通常伴隨著悲傷或焦慮的感覺。值得注意的是，抑鬱症並沒有單一成因，但對新環境的適應障礙、性格特徵和同儕關係是幾個在大學生中常見的因素。\n抑鬱症可能會損害學生的心理健康：抑鬱症的一個主要症狀是缺乏工作能量，他/她的學業成績可能會因此受到影響；由失眠或食慾不振引起的疲勞可能影響他/她的認知功能；抑鬱症亦可能導致社交退縮。\n抑鬱的學生有更大機會發展出如藥物濫用等問題，抑鬱症亦是青少年自殺的最大風險因素。如果你從任何學生身上識別出抑鬱症的症狀，需要立即採取行動，尋求專業和適當的幫助。",
    "title_cn": "抑郁",
    "intro_cn": "大学是常见出现抑郁症症状的阶段，通常伴随着悲伤或焦虑的感觉。值得注意的是，抑郁症并没有单一成因，但对新环境的适应障碍、性格特征和同侪关系是几个在大学生中常见的因素。\n抑郁症可能会损害学生的心理健康：抑郁症的一个主要症状是缺乏工作能量，他/她的学业成绩可能会因此受到影响；由失眠或食欲不振引起的疲劳可能影响他/她的认知功能；抑郁症亦可能导致社交退缩。\n抑郁的学生有更大机会发展出如药物滥用等问题，抑郁症亦是青少年自杀的最大风险因素。如果你从任何学生身上识别出抑郁症的症状，需要立即采取行动，寻求专业和适当的帮助。"
  },
  "10": {
    "title_en": "Anxiety",
    "title_zh": "焦慮",
    "intro_en": "Anxiety in university is very common, and the sharpest increase in anxiety occurs during the initial transition to university. Many factors contribute to anxiety among university students. For example, sleep disruption caused by pulling all-nighters, stress from inability to cope with new academic challenges and loneliness from difficulties with forming new peer relationship.\nThere are some specific types of anxiety: Anticipatory anxiety is characterised by increased anxiety and panic about events that are expected to happen in the future, such as an upcoming exam or meeting with a professor. Test anxiety is an anxiety related to tests with manifestations such as racing heart and inability to concentrate, often resulting in a heightened sense of panic or excessive fear, even when the individual is adequately prepared for the exam. Social anxiety is an intense fear or anxiety of social situations, including the moment of being in the classroom, doing presentation, talking to the professor, or participating in any group activity.",
    "intro_zh": "焦慮在大學生當中十分普遍，尤其是在他們剛剛升上大學時感到最多焦慮。當然有許多不同的因素導致大學生有各種焦慮。例如因為經常要晚上溫習而影響到睡眠，因未能應付新的學術挑戰而感到壓力，以及因為未能建立新的朋輩關係而感到孤獨。\n焦慮有許多不同的分類：期望性焦慮是一種對將會發生的事感到特別緊張甚至極度驚恐，例如將要來臨的考試和與導師見面；測驗焦慮是與測驗有關焦慮，例如即使事前已為測驗做好準備，也會在測驗時心跳加速或無法集中精神，最後導致過度驚慌甚至感到極度驚恐。社交焦慮是在社交情境中感到驚慌和緊張，包括參與課堂、進行簡報活動、與導師交談或參與其他小組活動。",
    "title_cn": "焦虑",
    "intro_cn": "焦虑在大学生当中十分普遍，尤其是在他们刚刚升上大学时感到最多焦虑。当然有许多不同的因素导致大学生有各种焦虑。例如因为经常要晚上温习而影响到睡眠，因未能应付新的学术挑战而感到压力，以及因为未能建立新的朋辈关系而感到孤独。\n焦虑有许多不同的分类：期望性焦虑是一种对将会发生的事感到特别紧张甚至极度惊恐，例如将要来临的考试和与导师见面；测验焦虑是与测验有关焦虑，例如即使事前已为测验做好准备，也会在测验时心跳加速或无法集中精神，最后导致过度惊慌甚至感到极度惊恐。社交焦虑是在社交情境中感到惊慌和紧张，包括参与课堂、进行简报活动、与导师交谈或参与其他小组活动。"
  },
  "11": {
    "title_en": "Psychosis",
    "title_zh": "思覺失調",
    "intro_en": "Psychosis is a mental state with the loss of contact with reality. Psychosis happens when a person has disturbed thoughts, perceives or hears things that make it difficult for them to understand what is real and what is not. Psychosis symptoms include delusions and hallucinations. Delusions are false beliefs. Hallucinations are when a person sees or hears things unreal that others do not see or hear.\nWhile delusion and hallucination may not be observed on a student unless you ask him/her directly, some additional symptoms can be observed, including: disorganised or bizarre speech or writing, inappropriate or unusual behaviours, change in personal hygiene and appearance, signs of depression or anxiety, social withdrawal, fatigue and lack of motivation, drop in  work performance, trouble concentrating.",
    "intro_zh": "思覺失調是一種與現實脫節了的精神狀況。此發生於當一個人的思想受到干擾，感覺或聽到一些難以分辨是否真實的事情。思覺失調的徵狀包括妄想及幻覺。妄想是指相信一些不曾發生的事情，而幻想是指一個人看到或聽到一些不真實而其他人不會看到或聽到的事。\n有時除了直接詢問外，很難從學生身上觀察到他/她是否有妄想和幻想。但亦有一些其他徵狀是可以透過觀察得知，例如：沒組織或混亂的說話和文字、不恰當或不尋常的行為、個人衛生和儀容的突然改變、抑鬱或焦慮徵狀、社交退縮、疲倦和缺乏動力、工作表現突然變差、難以專注。",
    "title_cn": "思觉失调",
    "intro_cn": "思觉失调是一种与现实脱节了的精神状况。此发生于当一个人的思想受到干扰，感觉或听到一些难以分辨是否真实的事情。思觉失调的征状包括妄想及幻觉。妄想是指相信一些不曾发生的事情，而幻想是指一个人看到或听到一些不真实而其他人不会看到或听到的事。\n有时除了直接询问外，很难从学生身上观察到他/她是否有妄想和幻想。但亦有一些其他征状是可以透过观察得知，例如：没组织或混乱的说话和文字、不恰当或不寻常的行为、个人卫生和仪容的突然改变、抑郁或焦虑征状、社交退缩、疲倦和缺乏动力、工作表现突然变差、难以专注。"
  },
  "12": {
    "title_en": "Reading and Writing Difficulties",
    "title_zh": "讀寫困難",
    "intro_en": "Reading and writing abilities, or simply literacy skills, are important academic abilities of students. As students have to process quantities of text for their learning, their reading skills define how effective and efficient they can obtain knowledge from books, notes or even presentation slides in the classroom. They also rely on their writing skills to present their knowledge and ideas accurately and efficiently.\nIf a student has problems with his/her reading and writing abilities, he/she may need to spend lots of time to prepare his/her lessons and assignments by reading literatures and notes. He/she may be confused by the massive information in text as he/she cannot decode and process the text accurately. Some students with reading and writing difficulties also have speech problems and general memory issues. For their written work, they often fail to express their ideas clearly because of poor sentence structure or inaccurate use of words. Frequent spelling and handwriting errors are also common in their writing work.",
    "intro_zh": "讀寫能力是學生學習能力的重要一環。由於他們需要在日常學習中處理極大量的文字，所以他們的閱讀技巧會直接反映他們能多有效和迅速從書本、筆記或課堂簡報中獲取知識。學生亦依賴他們的書寫能力去把他們的知識和想法準確和有效率地用文字表達。\n假如學生在讀寫能力上發生問題，他/她或需要花費更多時間去閱讀文獻和筆記來準備課堂和做功課。亦因為他們無法為文字解碼和準確消化文章，令他們對文字中的大量資訊感到十分混淆。部分有讀寫困難的學生亦同時有語言問題和記憶困難。在書寫工作上，他們常常因為較差的句子結構和用字不準確，而無法清晰地表達自己的意見。他們的書寫亦經常串錯字或有書寫錯誤。",
    "title_cn": "读写困难",
    "intro_cn": "读写能力是学生学习能力的重要一环。由于他们需要在日常学习中处理极大量的文字，所以他们的阅读技巧会直接反映他们能多有效和迅速从书本、笔记或课堂简报中获取知识。学生亦依赖他们的书写能力去把他们的知识和想法准确和有效率地用文字表达。\n假如学生在读写能力上发生问题，他/她或需要花费更多时间去阅读文献和笔记来准备课堂和做功课。亦因为他们无法为文字解码和准确消化文章，令他们对文字中的大量资讯感到十分混淆。部分有读写困难的学生亦同时有语言问题和记忆困难。在书写工作上，他们常常因为较差的句子结构和用字不准确，而无法清晰地表达自己的意见。他们的书写亦经常串错字或有书写错误。"
  }
};

questionnaire["1"]["questions"] = [
	{"en":"… seems being \"locked into\" an activity - obsessing over particular subjects or details to the detriment of other work.", "cn":"…看似沉醉在某活动当中，即沉迷在某特定内容或仔细地方，影响到其他工作。", "zh":"…看似沉醉在某活動當中，即沉迷在某特定內容或仔細地方，影響到其他工作。"},
	{"en":"… has difficulty following instructions and discussions during lectures.", "cn":"…对跟从指示或在课堂中讨论显得特别困难。", "zh":"…對跟從指示或在課堂中討論顯得特別困難。"},
	{"en":"… seems hypersensitive to surroundings and external stimuli.", "cn":"…看似对四周环境及外在刺激显得过度敏感。", "zh":"…看似對四周環境及外在刺激顯得過度敏感。"},
	{"en":"… genuinely forgets to go to lectures/tutorials and misses important appointments.", "cn":"…忘记了需要上课及经常错过重要的约会。", "zh":"…忘記了需要上課及經常錯過重要的約會。"},
	{"en":"… is noticeably restless and fidgety during long lectures.", "cn":"…明显在较长的课堂中显得坐立不安。", "zh":"…明顯在較長的課堂中顯得坐立不安。"},
	{"en":"… finds it difficult to listen carefully to what others have to say.", "cn":"…对要小心聆听别人说话显得特别困难。", "zh":"…對要小心聆聽別人說話顯得特別困難。"},
	{"en":"… can be easily distracted.", "cn":"…十分容易分心。", "zh":"…十分容易分心。"},
	{"en":"… has difficulty attending to conversations, activities, or tasks.", "cn":"…难以专注于对话、", "zh":"…難以專注於對話、 活動或被交託的任務當中。 "}
];

questionnaire["2"]["questions"] = [
	{"en":"… makes careless mistakes and seems rushing through his/her work.", "cn":"…匆忙完成工作及常常产生错误。", "zh":"…匆忙完成工作及常常產生錯誤。"},
	{"en":"… blurts out answers in class instead of raising hand.", "cn":"…在课堂中忘记举手便冲口而出。", "zh":"…在課堂中忘記舉手便衝口而出。"},
	{"en":"… does all the easy parts of an assignment but avoids the hard parts.", "cn":"…在课业中只完成容易的部分而逃避困难的部分。", "zh":"…在課業中只完成容易的部分而逃避困難的部分。"},
	{"en":"… starts work before receiving all the instructions.", "cn":"…未等及接收所有指示便开始他/她的工作。", "zh":"…未等及接收所有指示便開始他/她的工作。"},
	{"en":"… avoids or doesn’t complete homework.", "cn":"…逃避或未能完成功课。", "zh":"…逃避或未能完成功課。"},
	{"en":"… interrupts others while they’re talking.", "cn":"…常常打断别人的说话。", "zh":"…常常打斷別人的說話。"},
	{"en":"… speaks or gives his/her opinion at the wrong time.", "cn":"…在不适当的时候说话说出他/她的意见。", "zh":"…在不適當的時候說話說出他/她的意見。"},
	{"en":"… often gets out of seats suddenly.", "cn":"…经常突然离开座位。", "zh":"…經常突然離開座位。"}
];

questionnaire["3"]["questions"] = [
	{"en":"… doesn’t know where to start on a project or assignment.", "cn":"…不知道从何开始去完成课业或专题研习。", "zh":"…不知道從何開始去完成課業或專題研習。"},
	{"en":"… prefers multiple choice questions to open-ended responses.", "cn":"…喜欢多项选择题目多于开放式问题。", "zh":"…喜歡多項選擇題目多於開放式問題。"},
	{"en":"… struggles to take notes since everything seems equally important.", "cn":"…因为觉得所有课堂内容都一样重要，所以难以抄写笔记。", "zh":"…因為覺得所有課堂內容都一樣重要，所以難以抄寫筆記。"},
	{"en":"… has difficulty making decisions.", "cn":"…难以作出决定。", "zh":"…難以作出決定。"},
	{"en":"… struggles with strategising and/or multi-step problem solving.", "cn":"…对要定下策略或作出多步骤的解难显得十分困扰。", "zh":"…對要定下策略或作出多步驟的解難顯得十分困擾。"},
	{"en":"… has good ideas but can’t finish his/her work.", "cn":"…常有好的意念但却难以完成工作。", "zh":"…常有好的意念但卻難以完成工作。"},
	{"en":"… misjudges time needed to complete a task.", "cn":"…错估需要完成任务的时间。", "zh":"…錯估需要完成任務的時間。"},
	{"en":"… doesn’t plan ahead when he/she works on an assignment.", "cn":"…没有作出任何计划便开始他/她的课业。", "zh":"…沒有作出任何計劃便開始他/她的課業。"}
];

questionnaire["4"]["questions"] = [
	{"en":"… really struggles to take notes from lectures (writing and listening at the same time).", "cn":"…难以在课堂上抄写笔记（无法边聆听边书写）。", "zh":"…難以在課堂上抄寫筆記（無法邊聆聽邊書寫）。"},
	{"en":"… experiences ‘information overload’ easily when too much is presented too quickly.", "cn":"…当课堂教授内容又快又多时，会感到「超出负荷」。", "zh":"…當課堂教授內容又快又多時，會感到「超出負荷」。"},
	{"en":"… struggles to remember multi-step directions and follow them out.", "cn":"…对要记忆多重步骤的指示并把它们执行出来显得十分困难。", "zh":"…對要記憶多重步驟的指示並把它們執行出來顯得十分困難。"},
	{"en":"… misses important parts or key information in his/her assignments.", "cn":"…在课业中常常忘记一些重要的部分或内容资讯。", "zh":"…在課業中常常忘記一些重要的部分或內容資訊。"},
	{"en":"… may frequently forget what they were planning to say after raising hand or starting to speak.", "cn":"…经常在举手发问或开始说话时，忘记了自己打算说什么。", "zh":"…經常在舉手發問或開始說話時，忘記了自己打算說什麼。"},
	{"en":"… struggles with tracking the flow of conversations and participating appropriately.", "cn":"…在交谈时难以跟随谈话的内容并在适当的地方加入意见。", "zh":"…在交談時難以跟隨談話的內容並在適當的地方加入意見。"},
	{"en":"… forgets what he/she was doing.", "cn":"…常常忘记自己正在做什么。", "zh":"…常常忘記自己正在做什麼。"},
	{"en":"… needs help from others to stay on task.", "cn":"…需要别人协助才能专注于工作。", "zh":"…需要別人協助才能專注於工作。"}
];

questionnaire["5"]["questions"] = [
	{"en":"… doesn’t know where to start on an assignment or project, even if directions were just given.", "cn":"…即使刚刚收到指示，也不知道该如何开始他/她的课业或专题研习。", "zh":"…即使剛剛收到指示，也不知道該如何開始他/她的課業或專題研習。"},
	{"en":"… has trouble focusing again after a break.", "cn":"…在小休之后难以重新专注工作。", "zh":"…在小休之後難以重新專注工作。"},
	{"en":"… asks for help all the time, even when you know they understand the material and are capable of managing the work.", "cn":"…即使明白所需资讯及有能力完成工作", "zh":"…即使明白所需資訊及有能力完成工作，也經常尋求協助。"},
	{"en":"… procrastinates starting work until the last minute.", "cn":"…直至最后一刻也在拖延开始工作。", "zh":"…直至最後一刻也在拖延開始工作。"},
	{"en":"… finds other things to do instead of work (frequently going to the washroom, finding his/her stationaries, using the phone, etc).", "cn":"…在需要开始工作时常常作其他事情（例如经常去洗手间、寻找文具或使用电话）。", "zh":"…在需要開始工作時常常作其他事情（例如經常去洗手間、尋找文具或使用電話）。"},
	{"en":"… is frequently seen with his/her head down during work time.", "cn":"…在工作时常常低头。", "zh":"…在工作時常常低頭。"},
	{"en":"… seeks help at the last minute before the deadline.", "cn":"…经常在限时前最后一刻才寻求协助。", "zh":"…經常在限時前最後一刻才尋求協助。"},
	{"en":"… can’t tell the steps to do complete a task/assignment.", "cn":"…无法说出完成一件工作或课业的步骤。", "zh":"…無法說出完成一件工作或課業的步驟。"}
];

questionnaire["6"]["questions"] = [
	{"en":"… is unaware of how much effort they do or don’t put into their work.", "cn":"…不太掌握自己在一项工作上投放了多少努力。", "zh":"…不太掌握自己在一項工作上投放了多少努力。"},
	{"en":"… thinks of grades somewhat magically, and is confused/surprised by poor grades.", "cn":"…认为难以控制自己取得怎样的成绩，亦对自己取得到较差成绩显得十分惊讶。", "zh":"…認為難以控制自己取得怎樣的成績，亦對自己取得到較差成績顯得十分驚訝。"},
	{"en":"… talks too loudly or quickly.", "cn":"…常常大声说话或说话十分急促。", "zh":"…常常大聲說話或說話十分急促。"},
	{"en":"… doesn’t think to check around to gauge appropriate social behaviour.", "cn":"…不认为须透过检视自己去衡量自己的行为是否合乎社交标准。", "zh":"…不認為須透過檢視自己去衡量自己的行為是否合乎社交標準。"},
	{"en":"… has poor understanding of his/her own strengths and weaknesses.", "cn":"…不太理解自己的强弱项。", "zh":"…不太理解自己的強弱項。"},
	{"en":"… has messy and untidy work.", "cn":"…完成的工作十分混乱及欠整洁。", "zh":"…完成的工作十分混亂及欠整潔。"},
	{"en":"… makes many careless errors in his/her works.", "cn":"…完成的工作有许多不小心的错误。", "zh":"…完成的工作有許多不小心的錯誤。"},
	{"en":"… produces incomplete work.", "cn":"…常常递交未完成的工作。", "zh":"…常常遞交未完成的工作。"}
];

questionnaire["7"]["questions"] = [
	{"en":"… frequently loses assignments, supplies, library books, important messages, etc.", "cn":"…常常遗失课业、个人物品、图书、重要的信息等等。", "zh":"…常常遺失課業、個人物品、圖書、重要的信息等等。"},
	{"en":"… doesn’t change behaviours, even if they seem to want to/see the consequences for disorganisation.", "cn":"…即使知道自己做事混乱带来各样问题后，也不去改善。", "zh":"…即使知道自己做事混亂帶來各樣問題後，也不去改善。"},
	{"en":"… doesn’t use planners, even if given one.", "cn":"…从不使用计划表，甚至别人为他/她提供计划表也不会去使用。", "zh":"…從不使用計劃表，甚至別人為他/她提供計劃表也不會去使用。"},
	{"en":"… has a disastrous-looking backpack, bedroom and/or work space, and has trouble finding anything.", "cn":"…的背包、睡房、工作地方严重混乱，令自己有时难以找到想要的东西。", "zh":"…的背包、睡房、工作地方嚴重混亂，令自己有時難以找到想要的東西。"},
	{"en":"… loses electronic files/emails because he/she can’t remember where they are stored, or under what file name.", "cn":"…经常忘记自己在电脑中那里存放自己的档案或电邮，或忘记了它们的名称。", "zh":"…經常忘記自己在電腦中那裡存放自己的檔案或電郵，或忘記了它們的名稱。"},
	{"en":"… has good ideas but fails to present them on paper.", "cn":"…常常有好的意念，但难以把它们好好地写出来。", "zh":"…常常有好的意念，但難以把它們好好地寫出來。"},
	{"en":"… seems overloaded by large assignments.", "cn":"…对要完成一份较长的课业显得难以负荷。", "zh":"…對要完成一份較長的課業顯得難以負荷。"},
	{"en":"… has a messy desk.", "cn":"…自己的书台显得一片凌乱。", "zh":"…自己的書枱顯得一片淩亂。"}
];

questionnaire["8"]["questions"] = [
	{"en":"… has a hard time picking up on body and facial language cues.", "cn":"…无法掌握别人的肢体语言及面部表情。", "zh":"…無法掌握別人的肢體語言及面部表情。"},
	{"en":"… has difficulty seeing from the other person’s perspective. ", "cn":"…难以从别人的角度理解事物。", "zh":"…難以從別人的角度理解事物。"},
	{"en":"… has difficulties continuing a conversation, usually gives brief verbal replies or only talks about topics he/she is interested in.", "cn":"…对要维持对话显得十分困难，常常给予很简短的回应，或只会参与自己有兴趣的话题。", "zh":"…對要維持對話顯得十分困難，常常給予很簡短的回應，或只會參與自己有興趣的話題。"},
	{"en":"… has difficulty with understanding jokes and idioms, or when someone is using humour or being sarcastic.", "cn":"…难以理解笑话、俚语或幽默，或自己被嘲笑的时候。", "zh":"…難以理解笑話、俚語或幽默，或自己被嘲笑的時候。"},
	{"en":"… has very few friendships and seems often alone.", "cn":"…没有什么朋友及经常一个人。", "zh":"…沒有什麼朋友及經常一個人。"},
	{"en":"… sometimes appears to be rude to other people.", "cn":"…有时对别人显得什为无礼。", "zh":"…有時對別人顯得甚為無禮。"},
	{"en":"… has limited interests and often repeats certain themes and topics in his/her conversation or work.", "cn":"…兴趣狭窄，及在交谈或工作中经常重覆相同的主题。", "zh":"…興趣狹窄，及在交談或工作中經常重覆相同的主題。"},
	{"en":"… has a rigid mind and is hard to be persuaded.", "cn":"…思想非常固执及难以被说服。", "zh":"…思想非常固執及難以被說服。"}
];

questionnaire["9"]["questions"] = [
	{"en":"… seems sad or irritable more than usual.", "cn":"…看似十分失落或比平常容易被惹怒。", "zh":"…看似十分失落或比平常容易被惹怒。"},
	{"en":"… seems tired, lacks energy or gives up easily.", "cn":"…显得疲倦、缺乏精力或容易放弃。", "zh":"…顯得疲倦、缺乏精力或容易放棄。"},
	{"en":"… puts little effort into his/her work.", "cn":"…只在工作上投入少许努力。", "zh":"…只在工作上投入少許努力。"},
	{"en":"… has trouble concentrating in class.", "cn":"…无法在课堂上集中精神。", "zh":"…無法在課堂上集中精神。"},
	{"en":"… fails to turn in work or gets lower grades.", "cn":"…无法完成课业或取得很低的分数。", "zh":"…無法完成課業或取得很低的分數。"},
	{"en":"… seems not to enjoy things.", "cn":"…看似无法享受任何事情。", "zh":"…看似無法享受任何事情。"},
	{"en":"… withdraws from friends or activities.", "cn":"…疏远自己的朋友或在活动中显得退缩。", "zh":"…疏遠自己的朋友或在活動中顯得退縮。"},
	{"en":"… misses lessons badly, or is frequently late.", "cn":"…严重缺席或经常迟到。", "zh":"…嚴重缺席或經常遲到。"}
];

questionnaire["10"]["questions"] = [
	{"en":"… looks worried and can be irritated easily.", "cn":"…看似十分担心或容易被刺激。", "zh":"…看似十分擔心或容易被刺激。"},
	{"en":"… has difficulty concentrating and paying attention.", "cn":"…难以集中精神及专注于工作之上。", "zh":"…難以集中精神及專注於工作之上。"},
	{"en":"… seems being restless and fidgety in seat.", "cn":"…在座位上坐立不安。", "zh":"…在座位上坐立不安。"},
	{"en":"… works overly carefully which sometimes even impacts the working speed.", "cn":"…工作时过份谨慎，甚至会影响到工作的速度。", "zh":"…工作時過份謹慎，甚至會影響到工作的速度。"},
	{"en":"… often isolates himself/herself, or seems withdrawn.", "cn":"…看来十分退缩，经常孤立自己。", "zh":"…看來十分退縮，經常孤立自己。"},
	{"en":"… is excessively shy.", "cn":"…极度害羞。", "zh":"…極度害羞。"},
	{"en":"… looks tensed and unable to relax.", "cn":"…显得十分紧张，难以放松。", "zh":"…顯得十分緊張，難以放鬆。"},
	{"en":"… complains about trouble sleeping or any somatic problem.", "cn":"…诉说难以安睡或有其他身体毛病。", "zh":"…訴說難以安睡或有其他身體毛病。"}
];

questionnaire["11"]["questions"] = [
	{"en":"… expresses false beliefs that are firmly held.", "cn":"…透露自己深信一些并不真实的想法。", "zh":"…透露自己深信一些並不真實的想法。"},
	{"en":"… claims hearing, seeing or feeling something that is not actually there.", "cn":"…声称自己听到、看到或感到", "zh":"…聲稱自己聽到、看到或感到 一些並不存在的東西。"},
	{"en":"… has disorganised speech, thoughts or behaviour (e.g., switching rapidly between subjects in speaking).", "cn":"…作出一些凌乱的说话、想法或行为（例如不停转换说话的主题", "zh":"…作出一些凌亂的說話、想法或行為（例如不停轉換說話的主題 ）。"},
	{"en":"… has restricted emotional and facial expression.", "cn":"…木无表情或显得没有任何情绪。", "zh":"…木無表情或顯得沒有任何情緒。"},
	{"en":"… is easily distracted by the environment or even distant sounds.", "cn":"容易被四周环境导致分心，甚至被远处传来的声音影响。", "zh":"… 容易被四周環境導致分心，甚至被遠處傳來的聲音影響。"},
	{"en":"… has difficulty generating ideas or thoughts.", "cn":"…难以产生意念和想法。", "zh":"…難以產生意念和想法。"},
	{"en":"… has reduced ability to begin tasks.", "cn":"…难以开展工作。", "zh":"…難以開展工作。"},
	{"en":"… has reduced socialisation and motivation.", "cn":"…缺乏社交意欲和工作动力。", "zh":"…缺乏社交意欲和工作動力。"}
];

questionnaire["12"]["questions"] = [
	{"en":"… often forgets or miswrites terms and key words in his/her work", "cn":"…经常在课业中忘记或写错一些术语或重要字眼。", "zh":"…經常在課業中忘記或寫錯一些術語或重要字眼。"},
	{"en":"… spells (or writes) same word multiple ways within the same document. May even misspell (or miswrite) a word can be seen or referred to on the board or worksheet.", "cn":"…在同一份功课中多次以不同方式串错或写错相同的字，甚至有时那些字本身可以从黑板或笔记中抄过来。", "zh":"…在同一份功課中多次以不同方式串錯或寫錯相同的字，甚至有時那些字本身可以從黑板或筆記中抄過來。"},
	{"en":"… makes wild guesses at words or frequently fails to recognise words when reading", "cn":"…在阅读时经常要乱估或忘记如何读某些字。", "zh":"…在閱讀時經常要亂估或忘記如何讀某些字。"},
	{"en":"… frequently misspells/miswrites words in his/her work", "cn":"…在课业中经常串错或写错不同的字。", "zh":"…在課業中經常串錯或寫錯不同的字。"},
	{"en":"… mainly uses simple vocabulary in his/her work", "cn":"…在课业中只使用一些简单的词汇。", "zh":"…在課業中只使用一些簡單的詞彙。"},
	{"en":"… has limited written responses in length and detail compared to what he/she can do in an oral response", "cn":"…比起平日以口述方式表达，用书写方式表达时明显内容较少及简略。", "zh":"…比起平日以口述方式表達，用書寫方式表達時明顯內容較少及簡略。"},
	{"en":"… frequently misreads common high frequency words", "cn":"…经常错读一些常用字。", "zh":"…經常錯讀一些常用字。"},
	{"en":"… can read somehow accurate but very slowly", "cn":"…即使能准确阅读也读得比较慢。", "zh":"…即使能準確閱讀也讀得比較慢。"}
];



problem['1']['suggestion']['1_result_en']='fail to focus on the assignment and work at a low working speed;\nbe easily distracted by other thoughts and activities such that he/she keeps procrastinating;\noften make careless mistakes in the work such that he/she has to spend time amending his/her work.';
problem['1']['suggestion']['1_result_zh']='難以專注於課業之上及做得非常緩慢；\n容易因其他想法或活動令自己分心，令自己不停拖延；\n在工作上經常不小心出錯，令自己要花額外時間去修正。 ';
problem['1']['suggestion']['1_suggestion_en']='Discuss with your student what usually distracts him/her from work\nSuggest your student on how to break down a task into small ones, such that he/she can focus on them more easily.\nGive your student a schedule of when to complete each part of the assignment such that he/she can refer to and check the working pace.\nSuggest your student to find a study buddy, who can remind him/her to stay on task when working on the assignment.\nEncourage your student to seek help from professionals such as a psychiatrist if the attention problem persists.';
problem['1']['suggestion']['1_suggestion_zh']='與學生討論在工作時甚麼會令他/她容易分心。\n建議學生如何分拆工作， 好使他/她更容易專注於每一小部份。\n給予學生工作進度表，以了解應在何時完成課業中的不同部分，並用以檢查自己的進度。\n建議學生找一個可以提醒自己工作時專注的學習夥伴。\n當專注問題持續時，建議學生向專業人士（例如精神科醫生）尋求協助。';
problem['1']['suggestion']['5_result_en']='have no idea of how to start working on the assignment, e.g. where to find the reference;\nhave poor understanding of the requirements of the assignment;\nthink it is difficult to complete the assignment and there is no way to resolve it;\nnot have a plan of what to do first and next .';
problem['1']['suggestion']['5_result_zh']='不知道應該如何開始自己的課業，例如：不知道在何處找參考資料；\n不太理解課業的要求；\n認為要完成課業是一件十分困難的事，亦沒有辦法去處理；\n沒有任何計劃去按部就班工作。';
problem['1']['suggestion']['5_suggestion_en']='Share with your student the workflow to completing the assignment.\nGive your students a list of references and resources for the assignment and suggestions on how to use them.\nProvide hints on parts of the assignment and on each step which your student can follow.\nEncourage your student to make the first attempt with a manageable step.\nInvite your student to briefly share his/her ideas of how to do the assignment to boost his/her confidence.';
problem['1']['suggestion']['5_suggestion_zh']='與學生分享完成該課業的工作流程。\n給予學生參考資料和資源的列表，並建議他/她如何使用。\n就著課業中每部分給予學生小提示，好讓他/她能按步完成。\n鼓勵學生嘗試先完成課業中較容易處理的部分。\n邀請學生先簡略分享對於這份課業的已有意念，以增強他/她的信心。';
problem['1']['suggestion']['6_result_en']='have poor awareness of him/her-self being procrastinating;\nnot know how much he/she has completed of his/her assignment;\nhave no concept of what distracts him/her or what leads to his/her failure in completing the task.';
problem['1']['suggestion']['6_result_zh']='沒有任何意識自己正在拖延；\n不知道自己已經完成課業中的多少部分；\n對於自己為什麼會分心或為什麼做事失敗沒有任何概念。';
problem['1']['suggestion']['6_suggestion_en']='Discuss with your student what keeps him/her working slowly and the difficulties he/she faces.\nSend regular reminders to your student to help him/her keep track of the progress.\nBreak down the assignment into smaller tasks and request your student to submit the work part by part. ';
problem['1']['suggestion']['6_suggestion_zh']='與學生討論工作緩慢的原因及所面對的問題。\n定期向學生發送提示以檢視工作進度。\n把課業分拆成小部份，並請學生逐小部分完成及遞交。 ';
problem['1']['suggestion']['9_result_en']='have low energy to work;\nhave low self-esteem and think that he/she can never complete the assignment;\nbe frequently distracted by his/her worries and fail to focus on work;\nhave the working schedule disturbed by his/her swinging mood. ';
problem['1']['suggestion']['9_result_zh']='缺乏精力去完成工作；\n對自己的能力缺乏自信，甚至認為自己永遠不能完成課業；\n經常受自己的擔憂影響，無法專注於工作；\n受自己波動的情緒影響，無法按計劃執行工作。 ';
problem['1']['suggestion']['9_suggestion_en']='Reduce the demand and workload, or provide extra time if needed such that your student can manage the assignments.\nBreak down the assignment into smaller tasks and ask your student to submit one after one, so he/she feels it more manageable.\nShow recognition of what your student has achieved to boost his/her self-esteem.\nEncourage your student to seek help from professional such as a psychiatrist if the mood problem persists.';
problem['1']['suggestion']['9_suggestion_zh']='減低課業的要求和工作量，或給予額外時間，好讓學生能應付課業。\n把課業分拆成小部份並請學生逐部份遞交，好讓他/她感覺能應付得到。\n欣賞學生已完成課業的部分以增強他/她的自信。\n當情緒問題持續時，鼓勵學生向專業人士（例如精神科醫生）尋求協助。';
problem['1']['suggestion']['12_result_en']='spend lots of time to go through all reading materials;\nfail to get sufficient information and useful information from the text for completing the assignment;\nspend extra time on written assignments;\nbe defeated by the difficulties he/she faces due to his/her reading and writing difficulties. ';
problem['1']['suggestion']['12_result_zh']='要花大量時間去閱讀所有參考資料；\n無法從閱讀參考資料得到和有足夠用的材料去完成課業；\n需要額外時間去書寫課業；\n因為自己的閱讀和書寫困難而感到挫折。 ';
problem['1']['suggestion']['12_suggestion_en']='Give your student extra time to complete the assignment.\nProvide your student with quick notes of key content taught in the lesson as reference.\nSuggest alternative resources like videos which save your student\'s effort to read.\nAllow your student to submit alternative format of assignment, e.g. oral presentation or infographics.';
problem['1']['suggestion']['12_suggestion_zh']='給予學生額外時間去完成課業。\n為學生提供簡易筆記去理解課堂的內容。\n為學生建議例如短片之類的另類參考資料，以節省他/她閱讀的時間。\n容許學生以另類模式遞交課業，例如簡報或訊息圖表。';
problem['1']['suggestion']['General_result_en']='';
problem['1']['suggestion']['General_result_zh']='';
problem['1']['suggestion']['General_suggestion_en']='Discuss with your student about the difficulties he/she faces with the assignment.\nProvide more hints to your student about how to complete each part of the assignment such that he/she has more confidence to complete it.\nSend reminders and encouragement to him/her regularly to keep him/her motivated to work on the assignment.\nInvite your student to verbally present his/her ideas on how to complete the assignment to make sure he/she has a good start.\nGive extra time allowance to your student who have special needs for the submission of the assignment.';
problem['1']['suggestion']['General_suggestion_zh']='與學生討論工作中所面對的問題。\n給予學生完成課業中每部份的小提示，好讓他/她更有信心去完成。\n定期向學生發送提示和鼓勵，以保持他/她完成課業的動機。\n邀請學生口頭匯報他/她對如何完成課業的想法，以確保他/她有能力開展工作。\n給予有特別需要的學生額外時間去完成課業。';
problem['2a']['suggestion']['3_result_en']='not know clearly about the steps to complete an assignment;\nhave problems differentiating the key points/ideas to be included in the work;\nhave difficulty with linking up points to present a sensible and logical flow.';
problem['2a']['suggestion']['3_result_zh']='不太掌握該按甚麼步驟去完成課業；\n難以分辨哪些重點或概念需要放進課業內；\n難以把各重點聯繫起來成為有意思和有邏輯的闡述。';
problem['2a']['suggestion']['3_suggestion_en']='Share with your student your thinking process for completing the assignment, and ask him/her to jot it down.\nExplain the subject content and associations between key points with visual organiser, e.g. mind maps and flowcharts.\nProvide your student with working steps and framework(s) for writing the assignment.\nGive your student an example of good work from another student, and analyse it with him/her, such that he/she can learn from its structure and presentation skill.\nInvite your student to report his/her progress of completing the assignment and to share with you his/her draft of it on which you can comment and give suggestions.';
problem['2a']['suggestion']['3_suggestion_zh']='向學生分享自己處理該課業的思考過程， 並請他/她記錄下來。\n使用視覺學習工具（例如腦圖及流程圖）去解釋科目內容及不同重點之間的聯繫。\n為學生提供書寫課業所涉及的工作步驟和書寫框架。\n給予學生一些其他學生所做過的好作品並加以分析，使他/她能從中學習好的書寫架構及表達技巧。\n邀請學生匯報自己完成課業的進度，並提交課業初稿好讓你能給予評語和意見。';
problem['2a']['suggestion']['7_result_en']='have difficulty putting fragmented information from resources into meaningful ideas;\nhave problems organising the key points/ideas and including them in the assignment;\nmake frequent errors due to disorganised working pattern which slows down his/her working speed.';
problem['2a']['suggestion']['7_result_zh']='無法把參考資料中零碎的資料組合成有意思的意念；\n難以組織各重點和意念並把他們放進課業內；\n因自己缺乏組織的工作習慣令自己經常出錯，甚至影響到自己的工作速度。';
problem['2a']['suggestion']['7_suggestion_en']='Explain to your student the functions of different resources and the linkages between them.\nProvide your student with brief notes to summarise the content of different references if possible.\nProvide your student with what a well-structured assignment looks like and the suggested content of each part in the assignment.\nInvite your student to verbally report the information he/she has collected for the assignment and the draft of the points he/she wants to include in the assignment, before the write-up.';
problem['2a']['suggestion']['7_suggestion_zh']='向學生解釋不同參考資料的功用和它們之間的聯繫。\n為學生提供不同參考資料內容的簡略筆記。\n告知學生 課業應有的良好架構， 並就著每一部份提供內容建議。\n邀請學生在開始書寫課業前，先口頭匯報已經搜集的資料和打算加入課業內的簡略重點。';
problem['2a']['suggestion']['12_result_en']='fail to understand and organise the key points obtained from reading materials for the assignment;\nhave spent too much time on reading the materials such that he/she needs to rush through the assignment;\nhave the thinking process being obstructed by the needs to recall words, and to construct sentences when he/she writes the assignment;\nmix up and forget key points in the write-up. ';
problem['2a']['suggestion']['12_result_zh']=' 難以理解及組織從參考資料中得到的重點並用於課業之上；\n花費大量時間閱讀參考資料 令自己要匆忙完成課業；\n書寫課業時因要花時間去回想如何寫某些字或如何書寫句子，而打斷了自己的思路；\n書寫課業時經常混淆或忘記了需要的重點。';
problem['2a']['suggestion']['12_suggestion_en']='Provide alternative format of teaching materials, e.g. videos and infographics, to your student to explain the same subject content which lower the demand on his/her reading.\nHelp your student to highlight key points in the reading materials and make notes of the associations between the key points to facilitate him/her to organise the concepts.\nProvide your student the structure and format to write up the assignment\nAllow you student to submit his/her draft of the assignment on which you can comment and make suggestions.\nRefer your student to the language centre of the university for further support on his/her academic writing skills.\nFor severe cases of reading and writing difficulties, allow the student to submit his/her assignments in alternative format, e.g. verbal presentation, videos or infographics. ';
problem['2a']['suggestion']['12_suggestion_zh']='為學生提供另類模式的教學材料（例如影片和信息圖片），以減輕他/她的閱讀壓力。\n幫助學生在閱讀材料中間出重點，或就著各重點之間的聯繫編寫筆記，好讓他/她組織不同的概念。\n為學生提供書寫課業的架構和格式。\n容許學生遞交課業的初稿，好讓你能給予意見和建議。\n轉介學生到大學的語文中心，改善他/她作學術書寫的能力。\n如學生有嚴重的讀寫能力問題，應容許他/她以另類形式完成課業，例如口頭匯報、拍攝影片或製作資訊圖片。  ';
problem['2a']['suggestion']['General_result_en']='';
problem['2a']['suggestion']['General_result_zh']='';
problem['2a']['suggestion']['General_suggestion_en']='Share samples of assignment with good organisation and presentation.\nInclude the expected structure and organisation of the assignment in the information sheet of the given assignment.\nSuggest or hint the related resources/reading materials for each part of the assignment.\nInvite your student to verbally present his/her ideas and structure of his/her assignment before writing it out.\nMark all discussions between you and your student about the assignment on a paper such that he/she can refer to it later.\nSome resources which may be useful for your students: https://writing.wisc.edu/handbook/process/';
problem['2a']['suggestion']['General_suggestion_zh']='與學生分享有良好組織及表達技巧的參考課業例子。\n發放課業及其要求時，加入對課業的結構和內容組織的相關要求。\n就著課業中每部份可以參考哪些參考資料給予建議或提示。\n邀請學生在開始書寫課業前，先口頭匯報自己的意念和課業的結構。\n與學生討論有關課業的問題時，把討論內容記錄在紙上，好讓他/她能在之後參考。\n一些對學生有用的資源： https://writing.wisc.edu/handbook/process/';
problem['2b']['suggestion']['1_result_en']='often make careless mistakes in the work;\nbe distracted and fail to continue at where he/she has stopped when writing the assignment;\nlack organisation skill to present ideas in neat and tidy sentences.';
problem['2b']['suggestion']['1_result_zh']='經常在工作中不小心出錯；\n經常在書寫課業時分心，並忘記了自己分心前在那部份停了下來；\n缺乏應有的組織力去用一些簡潔和公整的句子去表達意念。 ';
problem['2b']['suggestion']['1_suggestion_en']='Discuss with your student the common mistakes you observed from his/her assignment.\nProvide your student with structure and format to write the assignment such that he/she can be more organised to put the ideas into words.\nAllow you student to submit his/her draft of the assignment on which you can comment and make suggestions.';
problem['2b']['suggestion']['1_suggestion_zh']='與學生討論一些常在課業中觀察到的錯誤。\n為學生提供書寫課業可用的結構和格式，好讓他/她能更有組織把自己的意念表達出來。\n容許學生遞交課業的初稿，好讓你能給予意見和建議。';
problem['2b']['suggestion']['12_result_en']='misread the reading materials and misuse some important words;\nfail to recall proper words to express ideas and sometimes misspell the words;\nnot be able to notice and model useful phrases and sentences from the reading materials;\nhave the thinking process being obstructed by the needs to recall words, and to construct sentences when he/she writes the assignment.';
problem['2b']['suggestion']['12_result_zh']='錯誤閱讀參考資料及錯用一些重要字眼；\n無法運用適當字眼去描述自己的意念， 或有時串錯或寫錯該字；\n無法從參考資料中留意到有用的短句或句子並加以運用；\n書寫課業時因要花時間去回想如何寫某些字或如何書寫句子，而打斷了自己的思路；';
problem['2b']['suggestion']['12_suggestion_en']='Consider allowing your student to submit his/her assignment in point form or alternative format.\nProvide list of academic vocabulary of the subject such that the student can drill on it explicitly.\nAllow you student to submit his/her draft of the assignment on which you can comment and make suggestions.\nRefer your student to the language centre of the university for further support on his/her academic writing skills.\nFor severe cases of reading and writing difficulties, allow the student to submit his/her assignments in alternative format, e.g. verbal presentation, videos or infographics. ';
problem['2b']['suggestion']['12_suggestion_zh']='考慮容許學生以點列或另類形式遞交他/她的課業。\n為學生提供該科目的學術詞彙列表，讓他/她作額外操練學習。\n容許學生遞交課業的初稿，好讓你能給予意見和建議。\n轉介學生到大學的語文中心，改善他/她作學術書寫的能力。\n如學生有嚴重的讀寫能力問題，應容許他/她以另類形式完成課業，例如口頭匯報、拍攝影片或製作資訊圖片。';
problem['2b']['suggestion']['General_result_en']='';
problem['2b']['suggestion']['General_result_zh']='';
problem['2b']['suggestion']['General_suggestion_en']='Suggest the student to use simple sentences for writing the assignment.\nTeach the student basic skills of academic writing, e.g. paraphrasing.\nSuggest useful tools and technology for proofreading and translation.';
problem['2b']['suggestion']['General_suggestion_zh']='建議學生用簡單句子去書寫課業。\n教導學生基本的學術書寫技巧， 例如改述技巧(paraphrasing)。\n建議一些有用的工具和科技去作校對和翻譯。';
problem['2c']['suggestion']['4_result_en']='fail to register key points, factual information and definitions in the memory\nmix up similar concepts and information in the memory;\nbe confused about and forget what are needed to be achieved when working on the assignment.';
problem['2c']['suggestion']['4_result_zh']='難以記憶某些重點、事實和釋義；\n在記憶中常常混淆相近的概念和資訊；\n在完成課業時會混淆或忘記了自己應該要達成的任務。';
problem['2c']['suggestion']['4_suggestion_en']='Provide your student additional notes of all key points for memorising.\nHelp your student to highlight key points in the reading materials and make notes of the associations between the key points to facilitate him/her to understand and memorise the concepts.\nExplain the subject content and associations between key points with visual organiser, e.g. mind maps and flowcharts.\nProvide different kinds of learning resource besides reading materials, e.g. videos, infographics, online quiz.';
problem['2c']['suggestion']['4_suggestion_zh']='為學生提供額外筆記以助記憶。\n幫助學生在閱讀材料中間出重點，或就著各重點之間的聯繫編寫筆記，好讓他/她組織不同的概念。\n使用視覺學習工具（例如腦圖及流程圖）去解釋科目內容及不同重點之間的聯繫。\n提供閱讀材料以外的學習資源，例如：影片、資訊圖片、網上小測驗。';
problem['2c']['suggestion']['7_result_en']='have difficulty with putting fragmented information from resources into meaningful ideas;\nhave problems organising the key points/ideas and to include them in the assignment;\nfail to summarise data, information and points into useful and meaningful conclusion.';
problem['2c']['suggestion']['7_result_zh']='無法把參考資料中零碎的資料組合成有意思的意念；\n難以組織各重點和意念並把它們放進課業內；\n無法歸納數據、資料和重點成為有用和有意義的結論。';
problem['2c']['suggestion']['7_suggestion_en']='Explain to your student the functions of different resources and the linkage between them.\nProvide your student brief notes to summarise the content of different references if possible.\nInvite your student to verbally report the information he/she has collected for the assignment and the draft of the points he/she wants to include in the assignment, before the write-up.';
problem['2c']['suggestion']['7_suggestion_zh']='向學生解釋不同參考資料的功用和它們之間的聯繫。\n為學生提供不同參考資料內容的簡略總結筆記。\n邀請學生在開始書寫課業前，先口頭匯報已經搜集的資料和打算加入課業內的簡略重點。';
problem['2c']['suggestion']['8_result_en']='have difficulty with understanding the requirement of the assignment through common sense;\nhave problem understanding some abstract concepts;\nnot be aware that he/she misinterprets what is told in the lesson;\nhave the content of his/her write-up side-tracked by his/her own restricted interest;\nhesitate to seek help when he/she is puzzled or does not understand.';
problem['2c']['suggestion']['8_result_zh']='難以用常理去了解課業的要求；\n對理解一些抽象的概念顯得有些困難；\n察覺不到自己誤解了一些課堂中提及的內容；\n書寫課業時經常離題，只提及到自己沉醉的內容；\n當自己感到困惑或不明白時不會去求助。';
problem['2c']['suggestion']['8_suggestion_en']='Explain explicitly the expected requirement of the assignment to your student. Check his/her understanding to make sure he/she knows what to do.\nAvoid using abstract language in class. Be careful of using analogy to explain, or make sure the student can understand.\nAsk questions and check his/her understanding in class to make sure he/she understands the subject matter.\nInvite your student to submit draft of his/her assignment to make sure he/she is on the right term in terms of the content.';
problem['2c']['suggestion']['8_suggestion_zh']='向學生清晰解說課業的要求和期望，並再三確認他/她是否明白自己需要做的事。\n避免在課堂上使用抽象的語言，留意在使用比喻時學生是否真的明白。\n在課堂上向學生提問以檢查他/她是否明白科目內容。\n邀請學生遞交課業的初稿，以確保內容在正確的方向之上。';
problem['2c']['suggestion']['12_result_en']='fail to understand and organise the key points obtained from reading materials for the assignment;\nhave the thinking process being obstructed by the needs to recall words, and to construct sentences when he/she writes the assignment;\nmix up and forget key points for the write-up. ';
problem['2c']['suggestion']['12_result_zh']=' 難以理解及組織從參考資料中得到的重點並用於課業之上；\n書寫課業時因要花時間去回想如何寫某些字或如何書寫句子，而打斷了自己的思路；\n書寫課業時經常混淆或忘記了需要的重點。';
problem['2c']['suggestion']['12_suggestion_en']='Provide alternative format of teaching materials, e.g. videos and infographics, to your student to explain the same subject content which lower the demand on his/her reading.\nHelp your student to highlight key points in the reading materials and make notes of the associations between the key points to facilitate him/her to organise the concepts.\nProvide your student the structure and format to write up the assignment\nAllow you student to submit his/her draft of the assignment on which you can comment and make suggestions.';
problem['2c']['suggestion']['12_suggestion_zh']='為學生提供另類模式的教學材料（例如影片和信息圖片），好以較低閱讀需求的形式解釋同樣的科目內容。\n幫助學生在閱讀材料中間出重點，或就著各重點之間的聯繫編寫筆記，好讓他/她組織不同的概念。\n為學生提供書寫課業的架構和格式。\n容許學生遞交課業的初稿，好讓你能給予意見和建議。';
problem['2c']['suggestion']['General_result_en']='';
problem['2c']['suggestion']['General_result_zh']='';
problem['2c']['suggestion']['General_suggestion_en']='Support your student to digest all references and resources effectively. Give them hints of where to locate the key points.\nHelp your student to make association between points and concepts such that he/she can make inference and summarise.\nApply visual strategies, e.g. mind maps, tables, infographics, videos, to support students with weak reading skills.\nConsider breaking down the assignment into smaller tasks, such that the student can follow and complete more easily.';
problem['2c']['suggestion']['General_suggestion_zh']='協助學生有效地消化所有參考資料和教學資源，給予他/她提示好讓他/她能找到當中的重點。\n協助學生理解重點和概念之間的聯繫，好使他/她能作出推論和歸納總結。\n應用不同視覺策略（例如腦圖、圖表、資訊圖片、影片）以支援閱讀能力較弱的學生。\n考慮把課業分拆成小部分，好讓學生能更易掌握及完成。';
problem['2d']['suggestion']['1_result_en']='fail to focus on the assignment and work at a low working speed;\nbe easily distracted by other thoughts and activities such that he/she keeps procrastinating;\noften make careless mistakes in the work such that he/she has to spend time amending his/her work.';
problem['2d']['suggestion']['1_result_zh']='難以專注於課業之上及做得非常緩慢；\n容易因其他想法或活動令自己分心，令自己不停拖延；\n在工作上經常不小心出錯，令自己要花額外時間去修正。 ';
problem['2d']['suggestion']['1_suggestion_en']='Discuss with your student what usually distracts him/her from work\nSuggest your student on how to break down a task into small ones, such that he/she can focus on them more easily.\nGive your student a schedule of when to complete each part of the assignment such that he/she can refer to and check the working pace.\nSuggest your student to find a study buddy, who can remind him/her to be on task when working on the assignment.\nEncourage your student to seek help from professional such as a psychiatrist if the attention problem persists.';
problem['2d']['suggestion']['1_suggestion_zh']='與學生討論在工作時甚麼會令他/她容易分心。\n建議學生如何分拆工作， 好使他/她更容易專注於每一小部份。\n給予學生工作進度表，以了解應在何時完成課業中的不同部分，並用以檢查自己的進度。\n建議學生找一個可以提醒自己工作時專注的學習夥伴。\n當專注問題持續時，建議學生向專業人士（例如精神科醫生）尋求協助。';
problem['2d']['suggestion']['6_result_en']='have poor awareness of being procrastinating;\nnot know how much he/she has completed of the assignment ;\nhave no concept of what distracts him/her or what leads to his/her failure in completing the task.';
problem['2d']['suggestion']['6_result_zh']='沒有任何意識自己正在拖延；\n不知道自己已經完成課業中的多少部分；\n對於自己為什麼會分心或為什麼做事失敗沒有任何概念。';
problem['2d']['suggestion']['6_suggestion_en']='Discuss with your student what keeps him/her working slowly and the difficulties he/she faces.\nSend regular reminder to your student to help him/her keep track of the progress.\nBreak down the assignment into smaller tasks and request your student to submit the work part by part. ';
problem['2d']['suggestion']['6_suggestion_zh']='與學生討論工作緩慢的原因及所面對的問題。\n定期向學生發送提示以檢視工作進度。\n把課業分拆成小部份，並請學生逐小部分完成及遞交。 ';
problem['2d']['suggestion']['12_result_en']='spend lots of time to go through all reading materials;\nfail to get sufficient and useful information from the resources for completing the assignment;\nspend extra time to write the assignment. ';
problem['2d']['suggestion']['12_result_zh']='要花大量時間去閱讀所有參考資料；\n無法從閱讀參考資料得到足夠和有用的材料去完成課業；\n需要額外時間去書寫課業。';
problem['2d']['suggestion']['12_suggestion_en']='Provide alternative format of teaching materials, e.g. videos and infographics, to your student to explain the same subject content which lower the demand on his/her reading.\nHelp your student to highlight key points in the reading materials and make notes of the associations between the key points to facilitate him/her to organise the concepts.\nProvide your student the structure and format to write up the assignment\nAllow you student to submit his/her draft of the assignment on which you can comment and make suggestions.';
problem['2d']['suggestion']['12_suggestion_zh']='為學生提供另類模式的教學材料（例如影片和信息圖片），以減輕他/她的閱讀壓力。\n幫助學生在閱讀材料中間出重點，或就著各重點之間的聯繫編寫筆記，好讓他/她組織不同的概念。\n為學生提供書寫課業的架構和格式。\n容許學生遞交課業的初稿，好讓你能給予意見和建議。';
problem['2d']['suggestion']['General_result_en']='';
problem['2d']['suggestion']['General_result_zh']='';
problem['2d']['suggestion']['General_suggestion_en']='Outline the expected structure of the assignment such that the student can understand the expected quantity of content.\nProvide the students more instructions of how to collect information  and brainstorm ideas for each part of the assignment.\nDiscuss with your student to help understand the difficulties he/she may have for completing the assignment.\nBreak down the assignment into smaller tasks such that the student may feel easier to complete each of them and be motivated.';
problem['2d']['suggestion']['General_suggestion_zh']='為學生勾畫一個課業應有的內容結構，好使他/她明白課業期望的 內容量。\n為學生提供更多指示，以了解如何為課業中每一部份蒐集資料和加入內容重點。\n與學生討論並了解他/她為完成課業所面對的各樣困難。\n把課業分拆成小部分，好使學生感到有能力完成每一部份並提高動機。';
problem['3a']['suggestion']['1_result_en']='fail to focus in lesson and during revision;\nbe easily distracted by other thoughts such that subject content is not registered in the memory during revision;\noften distracted by other activities such that he/she keeps procrastinating;\noften make careless mistakes in tests and exams.';
problem['3a']['suggestion']['1_result_zh']='難以在課堂或溫習時專注；\n容易因自己的想法分心，使得無法在溫習時把科目內容記好；\n容易因其他活動令自己分心，令自己不停拖延；\n在測驗考試時經常不小心出錯。 ';
problem['3a']['suggestion']['1_suggestion_en']='Discuss with your student what usually distracts him/her from revision.\nSuggest your student on how to structure the revision into shorter sessions with manageable goals, such that he/she can focus on it more easily.\nDiscuss and suggest your student a schedule of revision which he/she can follow and for monitoring his/her pace of work.\nSuggest your student to find a study buddy, who can remind him/her to stay focused when doing revision.\nEncourage your student to seek help from professional such as a psychiatrist if the attention problem persists.';
problem['3a']['suggestion']['1_suggestion_zh']='與學生討論在溫習時甚麼會令他/她容易分心。\n建議學生如何把溫習過程分成不同應付到的小節，好使他/她更容易專注。\n與學生討論並給予溫習進度表，好讓他/她跟從並檢查自己的進度。\n建議學生找一個可以提醒自己溫習時專注的學習夥伴。\n當專注問題持續時，建議學生向專業人士（例如精神科醫生）尋求協助。';
problem['3a']['suggestion']['4_result_en']='fail to register key points, factual information and definitions in the memory\nmix up similar concepts and information in the memory;\nbe confused and forget revised materials during tests and exams, especially when he/she is nervous.';
problem['3a']['suggestion']['4_result_zh']='難以記憶某些重點、事實和釋義；\n在記憶中常常混淆相近的概念和資訊；\n在測驗考試時會混淆或忘記了自己已經溫習過的內容，尤其是當自己十分緊張時。';
problem['3a']['suggestion']['4_suggestion_en']='Provide your student with additional notes of all key points for memorising.\nHelp your student to highlight key points in the reading materials and make notes of the associations between the key points to facilitate him/her to understand and memorise the concepts.\nExplain the subject content and associations between key points with visual organiser, e.g. mind maps and flowcharts.\nProvide different kinds of learning resources besides reading materials, e.g. videos, infographics, online quiz.';
problem['3a']['suggestion']['4_suggestion_zh']='為學生提供額外筆記以助記憶。\n幫助學生在閱讀材料中間出重點，或就著各重點之間的聯繫編寫筆記，好讓他/她組織不同的概念。\n使用視覺學習工具（例如腦圖及流程圖）去解釋科目內容及不同重點之間的聯繫。\n提供閱讀材料以外的學習資源，例如：影片、資訊圖片、網上小測驗。';
problem['3a']['suggestion']['5_result_en']='have no idea of how to start revising for tests, e.g. not knowing which parts of the material are important or elementary;\nhave poor understanding of what is covered in the test and its expectation;\nthink there is too much to revise and has no confidence to achieve it.';
problem['3a']['suggestion']['5_result_zh']='沒有頭緒該如何開始溫習為測驗作準備，例如不知道溫習材料中哪些部分是較為重要和屬於基本內容；\n不太了解考核內容及考核的期望；\n認為要溫習的內容太多亦沒有信心可以完成。';
problem['3a']['suggestion']['5_suggestion_en']='Share with your student how to prepare for the exam. Be specific and tell him/her where to start, e.g. which chapter of the textbook he/she should go through first.\nCheck with your student frequently on whether he/she has started the revision.\nGive your student short quizzes to encourage and guide him/her to do revision piece by piece on a regular basis.';
problem['3a']['suggestion']['5_suggestion_zh']='向學生分享該如何為考試作準備及溫習，提供具體方法並告訴他/她應該從何開始，例如應先閱讀課本中的哪一個章節\n定期檢查學生有否開始溫習。\n給予學生課堂上小測驗，以鼓勵及引導他們逐少逐少定期溫習。';
problem['3a']['suggestion']['6_result_en']='have poor awareness of being procrastinating;\nnot know how much he/she has to do for the revision and how much he/she has completed;\nhave no concept of what distracts him/her or what leads to his/her failure in the revision.';
problem['3a']['suggestion']['6_result_zh']='沒有任何意識自己正在拖延；\n不知道自己已經完成溫習範圍中的多少部分；\n對於自己為什麼會分心或溫習為什麼會失效沒有任何概念。';
problem['3a']['suggestion']['6_suggestion_en']='Discuss with your student what keeps him/her working slowly and the difficulties he/she faces.\nSend regular reminder to your student to help him/her keep track of the progress of revision.\nSuggest your student to break down the revision into smaller tasks and complete them one after one.';
problem['3a']['suggestion']['6_suggestion_zh']='與學生討論工作緩慢的原因及所面對的問題。\n定期向學生發送提示以檢視溫習進度。\n建議學生把溫習過程分拆成小部份，並逐步完成。 ';
problem['3a']['suggestion']['General_result_en']='';
problem['3a']['suggestion']['General_result_zh']='';
problem['3a']['suggestion']['General_suggestion_en']='Discuss with your student the difficulties he/she faces with the revision.\nProvide more hints to your student on how to start the revision and the study skills needed to deepen his/her learning and memory.\nSend reminders and encouragement to them regularly to keep them motivated to prepare for the tests.\nHelp your student to highlight key points in the reading materials and make notes of the associations between the key points to facilitate him/her to understand and memorise the concepts.\nUse a range of learning materials and learning strategies, e.g. mind maps, flowcharts, videos, infographics and online quiz, to help the student better manages the subject matter and memorise the content.\nSuggest your student to find a study buddy, who can support him/her when doing revision.';
problem['3a']['suggestion']['General_suggestion_zh']='與學生討論在溫習中所面對的問題。\n給予學生開展溫習的小提示，以及能增強學習和記憶的學習技巧。\n定期向學生發送提示和鼓勵，以保持他/她持續溫習的動機。\n幫助學生在閱讀材料中間出重點，或就著各重點之間的聯繫編寫筆記，好讓他/她能明白和記憶不同的概念。\n建議學生使用不同的學習材料和學習策略，例如：腦圖、流程圖、影片、資訊圖片、網上小測驗，以掌握和記憶科目內容。\n建議學生找一個可以在溫習時支援自己的學習夥伴。';
problem['3b']['suggestion']['1_result_en']='fail to focus in lesson and during revision;\nbe easily distracted by other thoughts such that subject content is not registered in the memory during revision;\nnot have patience to resolve and understand the difficult part of the subject content;';
problem['3b']['suggestion']['1_result_zh']='難以在課堂或溫習時專注；\n容易因自己的想法分心，使得無法在溫習時把科目內容記好；\n沒有耐性去拆解及理解科目內容中較艱深的部分。 ';
problem['3b']['suggestion']['1_suggestion_en']='Discuss with your student what usually distracts him/her in class and during revision.\nSuggest your student on how to structure the revision into small tasks with manageable goals, such that he/she can focus on it more easily.\nDiscuss and suggest your student a schedule of revision which he/she can follow and for monitoring his/her pace of work.\nSuggest your student to find a study buddy, who can remind him/her to be on task when doing revision.\nEncourage your student to seek help from professional such as a psychiatrist if the attention problem persists.';
problem['3b']['suggestion']['1_suggestion_zh']='與學生討論在課堂或溫習時甚麼會令他/她容易分心。\n建議學生如何把溫習過程分成不同應付到的小節，好使他/她更容易專注。\n與學生討論並給予溫習進度表，好讓他/她跟從並檢查自己的進度。\n建議學生找一個可以提醒自己溫習時專注的學習夥伴。\n當專注問題持續時，建議學生向專業人士（例如精神科醫生）尋求協助。';
problem['3b']['suggestion']['4_result_en']='fail to register key points, factual information and definitions in the memory;\nmix up similar concepts and information in the memory;\nbe confused and forget revised materials during tests and exams, especially when he/she is nervous.';
problem['3b']['suggestion']['4_result_zh']='難以記憶某些重點、事實和釋義；\n在記憶中常常混淆相近的概念和資訊；\n在測驗考試時會混淆或忘記了自己已經溫習過的內容，尤其是當自己十分緊張時。';
problem['3b']['suggestion']['4_suggestion_en']='Provide your student with additional notes of all key points for memorising.\nHelp your student to highlight key points in the reading materials and make notes of the associations between the key points to facilitate him/her to understand and memorise the concepts.\nExplain the subject content and associations between key points with visual organiser, e.g. mind maps and flowcharts.\nProvide different kinds of learning resources besides reading materials, e.g. videos, infographics, online quiz.';
problem['3b']['suggestion']['4_suggestion_zh']='為學生提供額外筆記以助記憶。\n幫助學生在閱讀材料中間出重點，或就著各重點之間的聯繫編寫筆記，好讓他/她組織不同的概念。\n使用視覺學習工具（例如腦圖及流程圖）去解釋科目內容及不同重點之間的聯繫。\n提供閱讀材料以外的學習資源，例如：影片、資訊圖片、網上小測驗。';
problem['3b']['suggestion']['7_result_en']='have difficulty with putting fragmented information from resources into meaningful ideas;\nhave problems organising the key points/ideas and to include them in his/her answers;\nfail to summarise data, information and points into useful and meaningful conclusion.';
problem['3b']['suggestion']['7_result_zh']='無法把參考資料中零碎的資料組合成有意思的意念；\n難以組織各重點和意念並把它們放到答案中；\n無法歸納數據、資料和重點成為有用和有意義的結論。';
problem['3b']['suggestion']['7_suggestion_en']='Explain to your student the functions of different resources and the linkage between them.\nProvide your students with brief notes to summarise the content of different references if possible.\nOr, suggest your student to prepare notes by himself/herself which help to process and organise all key points from the lesson and references.';
problem['3b']['suggestion']['7_suggestion_zh']='向學生解釋不同參考資料的功用和它們之間的聯繫。\n為學生提供不同參考資料內容的簡略總結筆記。\n或建議學生自己預備筆記，以幫助他/她消化及組織 從課堂上或參考資料中得來的不同重點。';
problem['3b']['suggestion']['8_result_en']='have difficulty with understanding more abstract concepts;\nnot be aware that he/she misinterprets what is told in the lesson;\nhave the content of his/her write-up side-tracked by his/her own restricted interest;\nhesitate to seek help when he/she is puzzled or does not understand.';
problem['3b']['suggestion']['8_result_zh']='對理解一些抽象的概念顯得有些困難；\n察覺不到自己誤解了一些課堂中提及的內容；\n回答問題時經常離題，只提及到自己沉醉的內容；\n當自己感到困惑或不明白時不會去求助。';
problem['3b']['suggestion']['8_suggestion_en']='Explain explicitly the subject matter with concrete language and daily life examples.\nAsk questions and check his/her understanding in class to make sure he/she understands the subject matter.\nAvoid using abstract language in class. Be careful when using analogy to explain, or make sure the student can understand.\nMake sure the student knows clearly the exam syllabus and the mode of exam.';
problem['3b']['suggestion']['8_suggestion_zh']='以具體語言及日常生活作例子，向學生清晰解說各科目內容、課業的要求和期望，並再三確認他/她是否明白自己需要做的事。\n在課堂上向學生提問以檢查他/她是否明白科目內容。\n避免在課堂上使用抽象的語言，留意在使用比喻時學生是否真的明白。\n確保學生清楚了解考試的範圍及形式。';
problem['3b']['suggestion']['General_result_en']='';
problem['3b']['suggestion']['General_result_zh']='';
problem['3b']['suggestion']['General_suggestion_en']='Support your student to digest all references and resources effectively. Give them hints of where to locate the key points.\nHelp your student to make association between points and concepts such that he/she can make inference and summarise.\nApply visual strategies, e.g. mind maps, tables, infographics, videos, to support students with weak reading skills.\nSuggest ways to revise, including applying the above visual strategies. Advise on how to break down the revision into smaller tasks, such that the student can be more motivated to follow.\nUse short online quiz to facilitate the student to check his/her understanding of the subject matter.';
problem['3b']['suggestion']['General_suggestion_zh']='協助學生有效地消化所有參考資料和教學資源，給予他/她提示好讓他/她能找到當中的重點。\n協助學生理解重點和概念之間的聯繫，好使他/她能作出推論和歸納總結。\n應用不同視覺策略（例如腦圖、圖表、資訊圖片、影片）以支援閱讀能力較弱的學生。\n給學生建議有用的溫習方法，包括上述的視覺學習策略，以及如何把溫習分拆成小部分，以提高學生的動機。\n使用網上小測驗去協助學生檢查自己對科目內容掌握了多少。';
problem['3c']['suggestion']['10_result_en']='be confused and forget revised materials during tests and exams when he/she is nervous;\nhesitate and be unsure about what to write for the answer;\nspend extra time to settle his/her mood during tests such that he/she may fail to complete the paper.';
problem['3c']['suggestion']['10_result_zh']='當自己在測考當中十分緊張時，會混淆或忘記了自己已經溫習過的內容；\n猶豫及不確定自己應該怎樣回答問題；\n花上不少時間去處理自己的情緒，令自己無法完成試卷。';
problem['3c']['suggestion']['10_suggestion_en']='Discuss with your student the worries he/she has and see if they can be resolved or reduced.\nSupport the student to set reasonable and achievement goal for the exam to enhance his/her confidence.\nReassure and encourage the student during the exam.\nConsider giving the student extra time during the exam to make the exam less stressful and to give him/her time to settle his/her emotion.\nEncourage your student to seek help from professional such as a psychiatrist if the anxiety problem persists.';
problem['3c']['suggestion']['10_suggestion_zh']='與學生討論他/她的擔憂，和看看那擔憂是否能解決或者減少。\n協助學生定下合理和能達成的考試成績目標，以增強自信。\n在測驗考試時肯定和鼓勵學生。\n考慮給予學生額外的考試時間，以減低他/她的壓力和給予他/她空間處理自己的情緒。\n當焦慮問題持續時，鼓勵學生向專業人士（例如精神科醫生）尋求協助。';
problem['3c']['suggestion']['General_result_en']='';
problem['3c']['suggestion']['General_result_zh']='';
problem['3c']['suggestion']['General_suggestion_en']='Explain clearly the structure and expectation of the exam such that the student can better prepared.\nSupport the student to better prepare for the exam so he/she will be more confident.\nGo through with the student on exam-taking strategies such as what to do when he/she is faced with a question he/she does not know to help student to be better equipped.';
problem['3c']['suggestion']['General_suggestion_zh']='解釋清楚考試的安排和期望，讓學生能作出更好的準備。\n協助學生好好準備應付考試，使他/她能更有信心。\n與學生認識各種應試策略以作好準備，例如當他/她不懂得如何作答某問題時可以怎樣處理。 ';
problem['3d']['suggestion']['3_result_en']='not know clearly about the steps to participate in the group and to complete the project;\nhave problem managing his/her time to fit into groupmate\'s working schedule;\nhave difficulty with adjusting his/her own workflow when there is a new demand from the group.';
problem['3d']['suggestion']['3_result_zh']='不太掌握該按甚麼步驟去完成小組課業；\n對管理自己的時間去配合組員的工作進度顯得十分困難；\n當小組有新的任務時，難以調節自己的工作流程去配合。';
problem['3d']['suggestion']['3_suggestion_en']='Explain clearly the expectation in the group project and how everyone can participate and contribute.\nAssign a leader in the group who can communicate with the student and help monitoring his/her working progress.\nSupport the student to improve his/her time management. Encourage the student to schedule regular time for the work of the group project.';
problem['3d']['suggestion']['3_suggestion_zh']='解釋清楚小組課業的要求和期望，以及每一個人可以如何參與和貢獻。\n在小組中安排一個可以和學生溝通的組長，並負責監察他/她的工作進度。\n協助學生改善他的時間管理能力，鼓勵他/她每日安排特定時間去執行小組課業的工作。';
problem['3d']['suggestion']['8_result_en']='have difficulty with understanding from groupmates\' perspective(s);\nbe rigid to change his/her ideas when there\'s no consensus with the groupmates;\nhave the content of his/her write-up side-tracked by his/her own restricted interest and cannot fit in the group\'s overall theme of the project;\nnot be trusted by the groupmates due to his/her weak social skills and become isolated.';
problem['3d']['suggestion']['8_result_zh']='難以從組員的角度去理解問題；\n當與組員未有共識時，固執得難以改變自己的想法；\n在書寫自己的部分時，常常加入過多自己沉醉的內容，最後無法配合小組的主題；\n因為自己的社交能力問題，未能被自己的組員信任甚至被孤立。';
problem['3d']['suggestion']['8_suggestion_en']='Explain explicitly to the student about how he/she can participate and contribute in the group project.\nSet ground rules for the communication in the group which can promote productive discussion.\nInform the groupmates, with the student\'s consent, about the characteristics of the student and how to communicate with him/her.\nInvite your student to submit draft(s) of his/her input to the group project, such that you can comment on it.';
problem['3d']['suggestion']['8_suggestion_zh']='明確解釋讓學生知道自己可以如何在小組中參與和作出貢獻。\n在小組中訂立有利正面討論的溝通規則。\n在學生的同意下，讓各組員了解學生的特性及該如何與學生溝通。\n邀請學生遞交小組課業自己部份的初稿，讓你可以給予意見。';
problem['3d']['suggestion']['12_result_en']='spend lots of time to go through reading materials and to write his/her work, such that he/she fails to meet the deadline to submit his/her work to the group;\nfail to get sufficient and useful information from the resources for a quality output;\nproduce poor write-up for the project with excessive writing errors.';
problem['3d']['suggestion']['12_result_zh']='要花大量時間閱讀參考資料去完成自己的部分，最後無法配合小組的工作期限；\n無法從閱讀參考資料得到足夠和有用的材料去做好自己的部份；\n書寫出差勁及有大量錯字的報告。';
problem['3d']['suggestion']['12_suggestion_en']='Help your student to highlight and get key points in the resources and make notes of the associations between the key points to facilitate him/her to organise the concepts.\nDiscuss with your student the expected structure and format to write up the group project\nSuggest the group to adjust the assigned role of each member in the group such that your student does not have to be responsible for tasks which demand heavily on reading and writing.';
problem['3d']['suggestion']['12_suggestion_zh']='幫助學生在閱讀材料中間出重點，或就著各重點之間的聯繫編寫筆記，好讓他/她組織不同的概念。\n與學生討論小組課業所期望的結構和格式。\n建議小組調節每個組員的角色和責任，使學生毋須負責一些需要大量閱讀和書寫的任務。 ';
problem['3d']['suggestion']['General_result_en']='';
problem['3d']['suggestion']['General_result_zh']='';
problem['3d']['suggestion']['General_suggestion_en']='Support the group to understand the strengths and weaknesses of each member and to assign roles according to their abilities.\nBrief your student about the common expectation of the group project and how he/she can contribute.\nFacilitate the group members to communicate. Help them to set rules for better communication and cooperation.';
problem['3d']['suggestion']['General_suggestion_zh']='協助小組了解各組員的強項和弱項，並就著各人的能力分配工作。\n向學生略述小組課業的一般期望及他/她可以如何作出貢獻。\n協助小組成員互相溝通，並幫他們訂立小組的規則令溝通和合作更暢順。 ';
problem['4']['suggestion']['2_result_en']='have greater urge to express his/her ideas;\nbe more emotional and get frustrated for disagreement;\nbe impulsive to say something improper with a slip of tongue.';
problem['4']['suggestion']['2_result_zh']='對表達自己的意見有強烈慾望；\n當與人意見不同時，會較為情緒化和不安；\n容易衝動說出不該說的說話。 ';
problem['4']['suggestion']['2_suggestion_en']='Acknowledge your student\'s emotion and also his/her attempt to contribute in the class.\nProvide opportunity to cool off.\nProvide alternate ways to express his/her views, e.g. writing it on a paper and discuss before the end of the lesson.';
problem['4']['suggestion']['2_suggestion_zh']='肯定學生的情緒，並認同他/她嘗試為課堂作出貢獻的意願。\n提供讓學生冷靜下來的機會。\n提供其他途徑讓學生表達自己的意見，例如讓他/她把自己的意見寫在紙上留待課堂完結前討論。';
problem['4']['suggestion']['8_result_en']='not understand the proper language and tone of speech to be used in the classroom;\nhave difficulty with understanding from others\' perspectives;\noverreact to disagreement and insist his/her view in a very rigid way;\nhave unknown frustration which he/she does not know how to tell;\nbe unaware of how his/her behaviour affect the class and his/her peers.';
problem['4']['suggestion']['8_result_zh']='不理解應該在課室中使用哪些恰當的語言和語氣；\n難以從別人的角度去理解問題；\n在意見不合時反應過激，亦過於堅持自己的看法；\n難以用語言說出自己也不太理解的不安；\n沒有意識自己的行為會影響到班中的其他人。';
problem['4']['suggestion']['8_suggestion_en']='Remind your student the feeling of others.\nMake the views of your student and others clearly known (e.g. writing both views on blackboard) in order to facilitate further discussion.\nExplain to your student how others perceive his/her views and the way he/she expresses.';
problem['4']['suggestion']['8_suggestion_zh']='提醒學生其他人當時的感受。\n讓學生和其他人都清楚明白各人各自的想法（例如把大家的觀點寫在黑板上）以便利進一步的討論。\n向學生解釋其他人會如何理解他/她的想法和他/她表達意見的方式。 ';
problem['4']['suggestion']['General_result_en']='';
problem['4']['suggestion']['General_result_zh']='';
problem['4']['suggestion']['General_suggestion_en']='Address the offensive behaviour. Reiterate the ground rules of communication and giving opinion, e.g. choice of words, being respectful, taking turn.\nExplicitly acknowledge and draw on students\' diversity in terms of experience, knowledge background and feeling.\nAllow short time-out from the discussion. Allow students to write down what they think and feel, and use the time to decide how they want to handle the situation.\nInvite and talk to disruptive students individually outside of class.';
problem['4']['suggestion']['General_suggestion_zh']='客觀指出學生冒犯性的行為，並重申在課堂中溝通和提出意見的基本規則，例如：恰當用字、互相尊重、輪流發言。\n明確指出及強調每個學生都有不同的經驗知識背景和感受， 需要大家理解、接納和尊重。\n容許暫停討論並讓學生寫下他們的想法和感受，及利用時間決定大家應該如何處理是次討論。\n邀請滋擾課堂的同學到班房外作單獨對話。';
problem['5']['suggestion']['1_result_en']='fail to focus in the lesson, especially when he/she feels bored;\nbe unaware of his/her status in the lesson;\nfail to complete his/her daily tasks due to inattentiveness and have his/her sleeping routine disturbed.';
problem['5']['suggestion']['1_result_zh']='無法在課堂中專注，尤其是當感到沉悶時；\n留意不到自己在課堂中的狀況；\n常常因自己的不專注而無法完成自己的日常工作，並影響到自己的睡眠。';
problem['5']['suggestion']['1_suggestion_en']='Discuss with your student what usually distracts him/her in class.\nEngage your student in class by inviting him/her to give opinion.\nAssign small learning tasks in the lesson to keep your student engaged.\nReassure his/her attempts in answering questions and encourage him/her, for better motivation.\nEncourage your student to seek help from professional such as a psychiatrist if the attention problem persists.';
problem['5']['suggestion']['1_suggestion_zh']='與學生討論經常因什麼事情而在課堂中分心。\n邀請學生給予意見以令他/她更容易投入課堂。\n安排特別的學習小任務以保持學生參與課堂活動。\n肯定學生對回答問題的參與並作出鼓勵，以提高他/她的動機。\n當專注問題持續時，建議學生向專業人士（例如精神科醫生）尋求協助。';
problem['5']['suggestion']['9_result_en']='have low energy to participate in class;\nbe frequently distracted by his/her worries and fail to focus;\nbe disturbed by his/her sudden mood. ';
problem['5']['suggestion']['9_result_zh']='沒有精力參與課堂；\n經常因自己的憂慮而分心；\n因突然而來的情緒而無法集中精神。 ';
problem['5']['suggestion']['9_suggestion_en']='Show your empathy of your student\'s feeling.\nAssign simple and manageable tasks to your student to make him/her feel engaged and achieving.\nProvide notes of the lecture such that your student won\'t miss anything from the lesson.\nEncourage your student to seek help from professional such as a psychiatrist.';
problem['5']['suggestion']['9_suggestion_zh']='對學生的感受顯示同理心。\n給學生安排一些簡單和容易處理的任務，好讓他/她感到參與當中及有成功感。\n為學生安排課堂筆記使他/她不會錯過課堂上的任何內容。\n鼓勵學生向專業人士（例如精神科醫生）尋求協助。';
problem['5']['suggestion']['General_result_en']='';
problem['5']['suggestion']['General_result_zh']='';
problem['5']['suggestion']['General_suggestion_en']='Discuss with the student and show your understanding of his/her difficulties.\nLeave room to your student to work at his/her own pace.\nExplore ways to progressively increase his/her participation in the lesson. Assign small tasks with manageable learning goals.';
problem['5']['suggestion']['General_suggestion_zh']='與學生討論並顯示你對他/她面對的困難之理解。\n容讓學生按自己的步伐工作。\n尋找讓學生逐步增加參與課堂的方法，例如給學生安排一些簡單和容易處理的任務。';
problem['6']['suggestion']['10_result_en']='have worries about his/her performance and hesitate to express or participate in class;\nexperience panic attack in class or have worries that he/she may experience another one;\nbe overly anxious when he/she needs to talk to someone or in public;\nhesitate and be unsure about what he/she can do to overcome the anxiety and other challenges.';
problem['6']['suggestion']['10_result_zh']='因擔心自己的表現而不敢在課堂中表達意見和參與；\n正感到極度驚恐，或擔心自己將會發生這種驚恐的情況；\n對需要與人交談或在大家面前說話感到十分緊張；\n對如何面對各種挑戰感到十分猶豫，亦不知道如何處理這所帶來的焦慮。';
problem['6']['suggestion']['10_suggestion_en']='Allow your student to take short break from the lesson in case of panic attack.\nProvide notes of the lecture such that your student won\'t miss anything.\nAssign small tasks with manageable learning goals to enhance his/her confidence and motivation.\nEncourage your student to seek help from professional such as a psychiatrist.';
problem['6']['suggestion']['10_suggestion_zh']='容許學生在課堂中感到極度驚恐時作短暫休息。\n為學生安排課堂筆記使他/她不會錯過課堂上的任何內容。\n給學生安排一些簡單和容易處理的任務，好讓他/她感到參與當中及有成功感。\n鼓勵學生向專業人士（例如精神科醫生）尋求協助。';
problem['6']['suggestion']['General_result_en']='';
problem['6']['suggestion']['General_result_zh']='';
problem['6']['suggestion']['General_suggestion_en']='Show your empathy of your student\'s feeling.\nAvoid questioning your student in front of the class.\nExplore the difficulties and worries of your student and see if any support can be provided.';
problem['6']['suggestion']['General_suggestion_zh']='對學生的感受顯示同理心。\n避免在課堂中向學生發問。\n嘗試了解學生的困難和擔憂，看看可以提供什麼協助。';
problem['7']['suggestion']['8_result_en']='not know the proper behaviour when in social contacts with others;\nbe unaware of how his/her appearance looks like from others\' perspectives;\nspeak in an unusual tone or with restricted use of words;\nthink and react in an atypical way, usually related to his restricted interests;\noverreact to noise and other stimuli;\nbe impulsive and emotional;\nbe unaware of how his/her behaviour affects the class and his/her peers.';
problem['7']['suggestion']['8_result_zh']='不了解在社交接觸時的應有行為；\n不察覺自己在別人眼中的外貌模樣；\n以不尋常的語調說話，或常常重覆某些字眼；\n有非一般的想法和做法，而此與他/她的獨特興趣有關；\n對噪音或其他刺激顯得異常敏感；\n衝動或情緒化；\n沒有意識自己的行為會影響到班中的其他人。';
problem['7']['suggestion']['8_suggestion_en']='Talk to your student and try to understand his/her needs.\nRemind your student how others feel about his/her behaviours.\nSet ground rules for the communication in class and explain the expected behaviours.\nAssign learning buddy to support your student in class.';
problem['7']['suggestion']['8_suggestion_zh']='與學生對話並嘗試了解他/她的需要\n提醒學生其他人對他/她的行為之感受。\n為課堂中的溝通方法及合理行為訂立規則。\n在課堂中安排學習夥伴支援學生。';
problem['7']['suggestion']['11_result_en']='be unable to organise his/her ideas and speech;\nhave his/her daily routine disturbed such that he/she fails to manage his/her work or even self-hygiene;\nthink and react in an atypical way, possibly because of his/her delusional belief;\nexperience hallucination in class such that he/she doesn\'t know how to respond to it;\nhesitate to express or be withdrawn as he/she is afraid of having his/her problem known by others.';
problem['7']['suggestion']['11_result_zh']='無法組織自己的想法和說話；\n日常生活十分混亂， 影響到自己的工作甚至個人衛生；\n有非一般的想法和做法，而此通常與他/她的妄想有關；\n在課堂中經歷幻覺而不知道應該如何處理；\n因害怕別人知道自己的問題，而不太敢表達或顯得退縮。';
problem['7']['suggestion']['11_suggestion_en']='Talk to your student and try to understand his/her needs.\nDiscuss with the students on what kind of support he/she expects from you in case he/she does not feel good in the classroom.\nAllow your student to take short breaks from the lesson if needed.\nEncourage your student to seek help from counsellor and other professionals.';
problem['7']['suggestion']['11_suggestion_zh']='與學生對話並嘗試了解他/她的需要。\n與學生討論他/她在課堂中感到不安時，期望得到怎樣的協助。\n容許學生在課堂中需要時作短暫休息。\n鼓勵學生向專業人士（例如精神科醫生）尋求協助。';
problem['7']['suggestion']['General_result_en']='';
problem['7']['suggestion']['General_result_zh']='';
problem['7']['suggestion']['General_suggestion_en']='Treat your student as normal people as much as you can.\nOften show your empathy and respect to your student.\nTry to understand his/her needs and see how you can help.\nSupport other classmates to understand your student\'s needs.\nSeek help from the school\'s counsellor if needed.';
problem['7']['suggestion']['General_suggestion_zh']='盡量將學生當作一般正常人看待。\n向學生展示你的同理心和尊重。\n嘗試了解他的需要及看看可以提供怎樣的幫助。\n協助其他同學了解該學生的需要。\n需要時可向大學的輔導員尋求協助。';
problem['8']['suggestion']['1_result_en']='fail to focus in the lesson, especially when he/she feels bored;\nbe unaware of his/her status in the lesson;\nfail to complete his/her daily tasks due to inattentiveness and have his/her sleeping routine disturbed.';
problem['8']['suggestion']['1_result_zh']='無法在課堂中專注，尤其是當感到沉悶時；\n留意不到自己在課堂中的狀況；\n常常因自己的不專注而無法完成自己的日常工作，並影響到自己的睡眠。';
problem['8']['suggestion']['1_suggestion_en']='Discuss with your student what usually distracts him/her in class.\nEngage your student in class by inviting him/her to give opinion.\nAssign small learning tasks in the lesson to keep your student engaged.\nReassure his/her attempt in answering questions and encourage him/her, for better motivation.\nEncourage your student to seek help from professional such as a psychiatrist if the attention problem persists.';
problem['8']['suggestion']['1_suggestion_zh']='與學生討論經常因什麼事情而在課堂中分心。\n邀請學生給予意見以令他/她更容易投入課堂。\n安排特別的學習小任務以保持學生參與課堂活動。\n肯定學生對回答問題的參與並作出鼓勵，以提高他/她的動機。\n當專注問題持續時，建議學生向專業人士（例如精神科醫生）尋求協助。';
problem['8']['suggestion']['8_result_en']='be distracted by the sudden thought of his/her restricted interests and be absorbed with it;\nbe unaware of his/her inattentiveness;\nbe distracted by noise and other stimuli due to hypersensitivity.';
problem['8']['suggestion']['8_result_zh']='因與自己獨特興趣有關的想法而分心並沉醉當中；\n沒察覺自己不專注；\n由於感官異常敏感，容易因噪音或其他刺激而分心。';
problem['8']['suggestion']['8_suggestion_en']='Discuss with your student what usually distracts him/her in class.\nTry to remove the stimuli which may distract your student\nRemind your student to stay focused during the lesson.\nAssign small learning tasks in the lesson to keep your student engaged. ';
problem['8']['suggestion']['8_suggestion_zh']='與學生討論經常因什麼事情而在課堂中分心。\n嘗試移除班房中一些容意令學生分心的刺激。\n多些在課堂中提醒學生保持專注。\n安排特別的學習小任務以保持學生參與課堂活動。';
problem['8']['suggestion']['11_result_en']='be disturbed by his/her delusional beliefs about anything happens in the classroom;\nexperience hallucination in class such that he/she doesn\'t know how to respond to it;\nhave his/her daily routine and sleeping disturbed such that he/she may lack energy to concentrate in class.';
problem['8']['suggestion']['11_result_zh']='因妄想而聯想到將有事情會發生，而受到干擾 ；\n在課堂中經歷幻覺而不知道應該如何處理；\n 因無法處理日常生活並影響到睡眠，所以缺乏精力專注上課。 ';
problem['8']['suggestion']['11_suggestion_en']='Talk to your student and try to understand his/her needs.\nDiscuss with the students on what kind of support he/she expects from you in case he/she does not feel good in the classroom.\nAllow your student to take short breaks from the lesson if needed.\nEncourage your student to seek help from counsellor and other professionals.';
problem['8']['suggestion']['11_suggestion_zh']='與學生對話並嘗試了解他/她的需要。\n與學生討論他/她在課堂中感到不安時，期望得到怎樣的協助。\n容許學生在課堂中需要時作短暫休息。\n鼓勵學生向專業人士（例如精神科醫生）尋求協助。';
problem['8']['suggestion']['General_result_en']='';
problem['8']['suggestion']['General_result_zh']='';
problem['8']['suggestion']['General_suggestion_en']='Discuss with the student and show your understanding of his/her difficulties.\nAssign small tasks with manageable learning goals to engage your student and to keep his/her attention.\nUse of motivating topics in the teaching materials and apply more visual strategies, e.g. using videos, to enhance your student\'s attention.\nAssign learning buddy to help reminding your student to stay on task and be attentive.';
problem['8']['suggestion']['General_suggestion_zh']='與學生討論並顯示你對他/她面對的困難之理解。\n安排特別的學習小任務以保持學生參與課堂活動及保持專注。\n在教學材料中加入一些提高動機的主題， 並應用視覺策略以提高學生的專注（例如：短片）。\n在課堂中安排學習夥伴協助提醒學生留心及專注於工作。';
problem['9']['suggestion']['1_result_en']='be forgetful about his/her timetable;\nbe unaware of time and does not check his/her watch;\nfail to complete his/her daily tasks due to inattentiveness and have his/her sleeping routine disturbed and get up late in the morning.';
problem['9']['suggestion']['1_result_zh']='容易忘記自己的時間表；\n沒有留意時間亦很少查看自己的手錶；\n常常因自己的不專注而無法完成自己的日常工作，並影響到睡眠令自己在早上無法起床上課。';
problem['9']['suggestion']['1_suggestion_en']='Discuss with your student his/her difficulty to manage his/her timetable.\nProvide your student strategies to improve work efficiency for saving his/her time.\nSuggest your student to find a study buddy, who can remind him/her to be on task when he/she works, and also to remind him/her to be on time for lessons.';
problem['9']['suggestion']['1_suggestion_zh']='與學生討論對管理自己時間表的困難。\n為學生提供有效率工作的策略以節省自己的工作時間。\n建議學生找一個可以提醒自己工作時專注和準時上課的學習夥伴。';
problem['9']['suggestion']['3_result_en']='not often check his/her schedule;\nhave problem managing his/her time to finish his/her other tasks before the lesson;\njudge many other tasks more important than the lesson.';
problem['9']['suggestion']['3_result_zh']='很少檢查自己的日程；\n難以安排好時間在上課之前完成自己本來要完成的工作；\n認為有許多任務比上課更加重要。';
problem['9']['suggestion']['3_suggestion_en']='Provide your student working steps and framework for working efficiently.\nDo planning for daily routine together with your student.\nDiscuss with him/her on how to prioritise his/her work and the importance of attending the lesson.';
problem['9']['suggestion']['3_suggestion_zh']='為學生提供能增加工作效率的工作步驟和框架。\n與學生一起計劃每天的生活和工作流程。\n與學生討論各樣工作的優次及準時上課的重要性。';
problem['9']['suggestion']['9_result_en']='have low energy to attend the lesson;\nexperience a depressive episode which he/she needs time to settle the mood;\nhave worries about school and studies which lower his/her motivation to attend classes;\nhave his/her sleeping routine disturbed and find it difficult to get up in the morning. ';
problem['9']['suggestion']['9_result_zh']='沒有精力上課；\n正在經歷抑鬱的發作期，而要花時間處理好情緒；\n對上課和學習充滿憂慮，從而減低了自己上課的動機；\n因睡眠受到影響，令自己在早上無法起床上課。';
problem['9']['suggestion']['9_suggestion_en']='Show your empathy to your student\'s feeling.\nDiscuss with your student on how to prioritise his/her tasks with limited energy, such that he/she can spare time for the lesson.\nAssign simple and manageable tasks to your student to make him/her feel engaged and achieving in the lesson.\nProvide notes of the lecture such that your student won\'t miss anything from the lesson.\nEncourage your student to seek help from professional such as a psychiatrist.';
problem['9']['suggestion']['9_suggestion_zh']='對學生的感受顯示同理心。\n與學生討論在有限的精力下該如何安排各樣工作的優次，好使他/她能安排時間上課。\n為學生安排課堂筆記使他/她不會錯過課堂上的任何內容。\n鼓勵學生向專業人士（例如精神科醫生）尋求協助。';
problem['9']['suggestion']['11_result_en']='have delusional beliefs which lower his/her motivation to attend classes ;\nhave disorganised thoughts and thus daily routine that he/she may forget to come to the lesson;\nhave his/her sleeping routine disturbed and find it difficult to get up in the morning. ';
problem['9']['suggestion']['11_result_zh']='因妄想扭曲了自己的想法，從而減低了自己上課的動機；\n因混亂的想法令自己的生活十分混亂，甚至忘記了要上課；\n因睡眠受到影響，令自己在早上無法起床上課。';
problem['9']['suggestion']['11_suggestion_en']='Talk to your student and try to understand his/her needs.\nDiscuss with the students on what kind of support he/she expects from you in case he/she does not feel good in the classroom.\nAllow your student to take short breaks from the lesson if needed.\nEncourage your student to seek help from counsellor and other professionals.';
problem['9']['suggestion']['11_suggestion_zh']='與學生對話並嘗試了解他/她的需要。\n與學生討論他/她在課堂中感到不安時，期望得到怎樣的協助。\n容許學生在課堂中需要時作短暫休息。\n鼓勵學生向專業人士（例如精神科醫生）尋求協助。';
problem['9']['suggestion']['General_result_en']='';
problem['9']['suggestion']['General_result_zh']='';
problem['9']['suggestion']['General_suggestion_en']='Try to understand your student\'s daily routine and what kind of difficulties he/she is facing.\nProvide practical solutions to his/her difficulties.\nMake sure your student can get a sense of achievement in your lesson. You can assign simple learning tasks to him/her, or give a easy short quiz by the end of the lesson to enhance his/her confidence.';
problem['9']['suggestion']['General_suggestion_zh']='嘗試理解學生每天的生活流程及面對那些困難。\n就著他/她的困難提供實際有用的解決方法。\n確保學生能在你的課堂中得到一點成功感。你可以安排一些簡單學習任務或在課堂結束前給予一個容易的小測驗，以增強他/她的自信。';
problem['10']['suggestion']['2_result_en']='have greater urge to express his/her ideas;\nget frustrated when his/her views are not known by others;\nbe impulsive to speak and forget the social rules.';
problem['10']['suggestion']['2_result_zh']='對表達自己的意見有強烈慾望；\n當自己的觀點未被他人了解時會感到挫敗；\n容易衝動說話並忘記社會規則。';
problem['10']['suggestion']['2_suggestion_en']='Acknowledge your student\'s attempt to contribute in the class.\nSupport your student to express his/her views in an organised way with proper manner by summarising his/her responses and then ask him/her to respond again.\nProvide alternate ways to express his/her views, e.g. writing it on a paper and discuss before the end of the lesson.';
problem['10']['suggestion']['2_suggestion_zh']='肯定學生在課堂中嘗試作出貢獻的意欲。\n協助學生以有組織性的方法及合適的態度表達自己的意見，並在你歸納了他/她的意見後再次給予回應。\n提供其他途徑讓學生表達自己的意見，例如讓他/她把自己的意見寫在紙上留待課堂完結前討論。';
problem['10']['suggestion']['8_result_en']='not understand the expected social interaction in the classroom;\nbe obsessed with the topics which are related to his/her restricted interest;\nhave difficulty with managing his/her impulsiveness;\nbe unaware of others\' needs and how his/her behaviour affects the class and his/her peers.';
problem['10']['suggestion']['8_result_zh']='不了解在課堂中的應有社交活動；\n沉溺於與自己獨特興趣有關的話題；\n難以處理自己的衝動特性；\n不了解其他人的需要，亦沒有意識自己的行為會影響到班中的其他人。';
problem['10']['suggestion']['8_suggestion_en']='Be aware of and avoid the topic that your student is obsessed with.\nReiterate the ground rules of communication and giving opinion, e.g. choice of words, being respectful, taking turn.\nExplain to your student how others perceive his/her views and the way he/she expresses.';
problem['10']['suggestion']['8_suggestion_zh']='留意並避免一些學生容易糾纏的話題。\n重申在課堂中溝通和提出意見的 基本規則，例如：恰當用字、互相尊重、輪流發言。\n向學生解釋其他人會如何理解他/她的想法和他/她表達意見的方式。 ';
problem['10']['suggestion']['General_result_en']='';
problem['10']['suggestion']['General_result_zh']='';
problem['10']['suggestion']['General_suggestion_en']='Try to respond to the student\'s questions immediately and divert the discussion and move to another topic.\nDraw attention to the kinds of participation you value in class.\nPost questions on board and let all student to write down his/her opinions about it.\nInvite and talk to the student individually outside of class if needed.';
problem['10']['suggestion']['General_suggestion_zh']='嘗試即時回應學生的問題，並嘗試引導討論到另一話題。\n讓學生意識到你欣賞哪一種參與課堂的方式。\n把問題寫在黑板上並讓所有學生寫下他們對此問題的意見。\n如有需要可邀請學生到班房外作單獨對話。';
problem['11']['suggestion']['2_result_en']='have greater urge to express his/her ideas and accommodate his/her needs;\nbe more emotional and get frustrated when his/her needs are not satisfied;\nbe impulsive to say something improper with a slip of tongue.';
problem['11']['suggestion']['2_result_zh']='對表達自己的意見有強烈慾望，亦需要其他人配合自己的需要；\n當別人無法掌握自己的想法時會感到十分不安及情緒化；\n容易衝動說出不該說的話。 ';
problem['11']['suggestion']['2_suggestion_en']='Acknowledge your student\'s emotion and his/her urge to express his/her needs.\nProvide opportunity or suggest strategies for student to cool off in a calm manner.\nProvide alternate ways to express his/her views, e.g. writing it on a paper and discuss before the end of the lesson.';
problem['11']['suggestion']['2_suggestion_zh']='確認學生當時的情緒及表達自己意見的渴望。\n為學生提供有效令自己冷靜的機會及策略。\n提供其他途徑讓學生表達自己的意見，例如讓他/她把自己的意見寫在紙上留待課堂完結前討論。';
problem['11']['suggestion']['8_result_en']='not understand the proper language and tone of speech to be used in the classroom;\nhave difficulty understanding others\' perspectives;\noverreact to disagreement and insist his/her view in a very rigid way;\nhave unknown frustration which he/she does not know how to tell;\nbe unaware of how his/her behaviours affect the class and his/her peers.';
problem['11']['suggestion']['8_result_zh']='不理解應該在課室中使用哪些恰當的語言和語氣；\n難以從別人的角度去理解問題；\n在意見不合時反應過激，亦過於堅持自己的看法；\n難以用語言說出自己也不太理解的不安；\n沒有意識自己的行為會影響到班中的其他人。';
problem['11']['suggestion']['8_suggestion_en']='Remind your student the feeling of others.\nMake the views of your student and others clearly known (e.g. writing both views on blackboard) in order to facilitate further discussion.\nExplain to your student how others perceive his/her views and the way he/she expresses.';
problem['11']['suggestion']['8_suggestion_zh']='提醒學生其他人當時的感受。\n讓學生和其他人都清楚明白各人各自的想法（例如把大家的觀點寫在黑板上）以便利進一步的討論。\n向學生解釋其他人會如何理解他/她的想法和他/她表達意見的方式。 ';
problem['11']['suggestion']['11_result_en']='have delusional beliefs which trigger his/her emotion or distort how he/she views others;\nexperience hallucination and frustrate him/her;\nhave disorganised thoughts that he/she cannot express the ideas properly.';
problem['11']['suggestion']['11_result_zh']='因妄想徵狀而刺激了情緒或扭曲了對其他人的想法；\n正經歷幻覺 而感到十分不安；\n因混亂的想法而無法好好表達自己。';
problem['11']['suggestion']['11_suggestion_en']='Try to address your student\'s needs if possible.\nRemind your student the expected behaviour in the classroom.\nAvoid arguing with the student, or discussing any content from his/her delusion, but give firm and simple instructions to the student.  ';
problem['11']['suggestion']['11_suggestion_zh']='如情況許可，盡量回應學生的需要。\n提醒學生在課堂中的應有行為。\n避免和學生爭論或討論任何他/她妄想的內容，而應給予他/她肯定而簡單的指令。 ';
problem['11']['suggestion']['General_result_en']='';
problem['11']['suggestion']['General_result_zh']='';
problem['11']['suggestion']['General_suggestion_en']='Address the offensive behaviour immediately. Reiterate the ground rules of communication and the expected behaviours, e.g. choice of words, being respectful, taking turn to talk.\nExplicitly acknowledge and draw on students\' diversity in terms of experience, knowledge background and feeling.\nAllow short time-out from any argument. Allow students to write down what they think and feel, and use the time to decide how they want to handle the situation.\nInvite and talk to disruptive students outside of class.';
problem['11']['suggestion']['General_suggestion_zh']='即時客觀指出學生冒犯性的行為，並重申在課堂中溝通和應有行為的基本規則，例如：恰當用字、互相尊重、輪流發言。\n明確指出及強調每個學生都有不同的經驗、知識背景和感受，需要大家理解、接納和尊重。\n容許暫停討論並讓學生寫下他們的想法和感受，及利用時間決定大家應該如何處理是次討論。\n邀請滋擾課堂的同學到班房外作單獨對話。';

problem['1']['suggestion']['1_result_cn']='难以专注于课业之上及做得非常缓慢；\n容易因其他想法或活动令自己分心，令自己不停拖延；\n在工作上经常不小心出错，令自己要花额外时间去修正。 ';
problem['1']['suggestion']['1_suggestion_cn']='与学生讨论在工作时什么会令他/她容易分心。\n建议学生如何分拆工作， 好使他/她更容易专注于每一小部份。\n给予学生工作进度表，以了解应在何时完成课业中的不同部分，并用以检查自己的进度。\n建议学生找一个可以提醒自己工作时专注的学习伙伴。\n当专注问题持续时，建议学生向专业人士（例如精神科医生）寻求协助。 ';
problem['1']['suggestion']['5_result_cn']='不知道应该如何开始自己的课业，例如：不知道在何处找参考资料；\n不太理解课业的要求；\n认为要完成课业是一件十分困难的事，亦没有办法去处理；\n没有任何计划去按部就班工作。 ';
problem['1']['suggestion']['5_suggestion_cn']='与学生分享完成该课业的工作流程。\n给予学生参考资料和资源的列表，并建议他/她如何使用。\n就着课业中每部分给予学生小提示，好让他/她能按步完成。\n鼓励学生尝试先完成课业中较容易处理的部分。\n邀请学生先简略分享对于这份课业的已有意念，以增强他/她的信心。 ';
problem['1']['suggestion']['6_result_cn']='没有任何意识自己正在拖延；\n不知道自己已经完成课业中的多少部分；\n对于自己为什么会分心或为什么做事失败没有任何概念。 ';
problem['1']['suggestion']['6_suggestion_cn']='与学生讨论工作缓慢的原因及所面对的问题。\n定期向学生发送提示以检视工作进度。\n把课业分拆成小部份，并请学生逐小部分完成及递交。 ';
problem['1']['suggestion']['9_result_cn']='缺乏精力去完成工作；\n对自己的能力缺乏自信，甚至认为自己永远不能完成课业；\n经常受自己的担忧影响，无法专注于工作；\n受自己波动的情绪影响，无法按计划执行工作。 ';
problem['1']['suggestion']['9_suggestion_cn']='减低课业的要求和工作量，或给予额外时间，好让学生能应付课业。\n把课业分拆成小部份并请学生逐部份递交，好让他/她感觉能应付得到。\n欣赏学生已完成课业的部分以增强他/她的自信。\n当情绪问题持续时，鼓励学生向专业人士（例如精神科医生）寻求协助。 ';
problem['1']['suggestion']['12_result_cn']='要花大量时间去阅读所有参考资料；\n无法从阅读参考资料得到和有足够用的材料去完成课业；\n需要额外时间去书写课业；\n因为自己的阅读和书写困难而感到挫折。 ';
problem['1']['suggestion']['12_suggestion_cn']='给予学生额外时间去完成课业。\n为学生提供简易笔记去理解课堂的内容。\n为学生建议例如短片之类的另类参考资料，以节省他/她阅读的时间。\n容许学生以另类模式递交课业，例如简报或讯息图表。 ';
problem['1']['suggestion']['General_result_cn']='';
problem['1']['suggestion']['General_suggestion_cn']='与学生讨论工作中所面对的问题。\n给予学生完成课业中每部份的小提示，好让他/她更有信心去完成。\n定期向学生发送提示和鼓励，以保持他/她完成课业的动机。\n邀请学生口头汇报他/她对如何完成课业的想法，以确保他/她有能力开展工作。\n给予有特别需要的学生额外时间去完成课业。 ';
problem['2a']['suggestion']['3_result_cn']='不太掌握该按什么步骤去完成课业；\n难以分辨哪些重点或概念需要放进课业内；\n难以把各重点联系起来成为有意思和有逻辑的阐述。 ';
problem['2a']['suggestion']['3_suggestion_cn']='向学生分享自己处理该课业的思考过程， 并请他/她记录下来。\n使用视觉学习工具（例如脑图及流程图）去解释科目内容及不同重点之间的联系。\n为学生提供书写课业所涉及的工作步骤和书写框架。\n给予学生一些其他学生所做过的好作品并加以分析，使他/她能从中学习好的书写架构及表达技巧。\n邀请学生汇报自己完成课业的进度，并提交课业初稿好让你能给予评语和意见。 ';
problem['2a']['suggestion']['7_result_cn']='无法把参考资料中零碎的资料组合成有意思的意念；\n难以组织各重点和意念并把他们放进课业内；\n因自己缺乏组织的工作习惯令自己经常出错，甚至影响到自己的工作速度。 ';
problem['2a']['suggestion']['7_suggestion_cn']='向学生解释不同参考资料的功用和它们之间的联系。\n为学生提供不同参考资料内容的简略笔记。\n告知学生 课业应有的良好架构， 并就着每一部份提供内容建议。\n邀请学生在开始书写课业前，先口头汇报已经搜集的资料和打算加入课业内的简略重点。 ';
problem['2a']['suggestion']['12_result_cn']=' 难以理解及组织从参考资料中得到的重点并用于课业之上；\n花费大量时间阅读参考资料 令自己要匆忙完成课业；\n书写课业时因要花时间去回想如何写某些字或如何书写句子，而打断了自己的思路；\n书写课业时经常混淆或忘记了需要的重点。 ';
problem['2a']['suggestion']['12_suggestion_cn']='为学生提供另类模式的教学材料（例如影片和信息图片），以减轻他/她的阅读压力。\n帮助学生在阅读材料中间出重点，或就着各重点之间的联系编写笔记，好让他/她组织不同的概念。\n为学生提供书写课业的架构和格式。\n容许学生递交课业的初稿，好让你能给予意见和建议。\n转介学生到大学的语文中心，改善他/她作学术书写的能力。\n如学生有严重的读写能力问题，应容许他/她以另类形式完成课业，例如口头汇报、拍摄影片或制作资讯图片。 ';
problem['2a']['suggestion']['General_result_cn']='';
problem['2a']['suggestion']['General_suggestion_cn']='与学生分享有良好组织及表达技巧的参考课业例子。\n发放课业及其要求时，加入对课业的结构和内容组织的相关要求。\n就着课业中每部份可以参考哪些参考资料给予建议或提示。\n邀请学生在开始书写课业前，先口头汇报自己的意念和课业的结构。\n与学生讨论有关课业的问题时，把讨论内容记录在纸上，好让他/她能在之后参考。\n一些对学生有用的资源： https://writing.wisc.edu/handbook/process/';
problem['2b']['suggestion']['1_result_cn']='经常在工作中不小心出错；\n经常在书写课业时分心，并忘记了自己分心前在那部份停了下来；\n缺乏应有的组织力去用一些简洁和公整的句子去表达意念。 ';
problem['2b']['suggestion']['1_suggestion_cn']='与学生讨论一些常在课业中观察到的错误。\n为学生提供书写课业可用的结构和格式，好让他/她能更有组织把自己的意念表达出来。\n容许学生递交课业的初稿，好让你能给予意见和建议。 ';
problem['2b']['suggestion']['12_result_cn']='错误阅读参考资料及错用一些重要字眼；\n无法运用适当字眼去描述自己的意念， 或有时串错或写错该字；\n无法从参考资料中留意到有用的短句或句子并加以运用；\n书写课业时因要花时间去回想如何写某些字或如何书写句子，而打断了自己的思路；';
problem['2b']['suggestion']['12_suggestion_cn']='考虑容许学生以点列或另类形式递交他/她的课业。\n为学生提供该科目的学术词汇列表，让他/她作额外操练学习。\n容许学生递交课业的初稿，好让你能给予意见和建议。\n转介学生到大学的语文中心，改善他/她作学术书写的能力。\n如学生有严重的读写能力问题，应容许他/她以另类形式完成课业，例如口头汇报、拍摄影片或制作资讯图片。 ';
problem['2b']['suggestion']['General_result_cn']='';
problem['2b']['suggestion']['General_suggestion_cn']='建议学生用简单句子去书写课业。\n教导学生基本的学术书写技巧， 例如改述技巧(paraphrasing)。\n建议一些有用的工具和科技去作校对和翻译。 ';
problem['2c']['suggestion']['4_result_cn']='难以记忆某些重点、事实和释义；\n在记忆中常常混淆相近的概念和资讯；\n在完成课业时会混淆或忘记了自己应该要达成的任务。 ';
problem['2c']['suggestion']['4_suggestion_cn']='为学生提供额外笔记以助记忆。\n帮助学生在阅读材料中间出重点，或就着各重点之间的联系编写笔记，好让他/她组织不同的概念。\n使用视觉学习工具（例如脑图及流程图）去解释科目内容及不同重点之间的联系。\n提供阅读材料以外的学习资源，例如：影片、资讯图片、网上小测验。 ';
problem['2c']['suggestion']['7_result_cn']='无法把参考资料中零碎的资料组合成有意思的意念；\n难以组织各重点和意念并把它们放进课业内；\n无法归纳数据、资料和重点成为有用和有意义的结论。 ';
problem['2c']['suggestion']['7_suggestion_cn']='向学生解释不同参考资料的功用和它们之间的联系。\n为学生提供不同参考资料内容的简略总结笔记。\n邀请学生在开始书写课业前，先口头汇报已经搜集的资料和打算加入课业内的简略重点。 ';
problem['2c']['suggestion']['8_result_cn']='难以用常理去了解课业的要求；\n对理解一些抽象的概念显得有些困难；\n察觉不到自己误解了一些课堂中提及的内容；\n书写课业时经常离题，只提及到自己沉醉的内容；\n当自己感到困惑或不明白时不会去求助。 ';
problem['2c']['suggestion']['8_suggestion_cn']='向学生清晰解说课业的要求和期望，并再三确认他/她是否明白自己需要做的事。\n避免在课堂上使用抽象的语言，留意在使用比喻时学生是否真的明白。\n在课堂上向学生提问以检查他/她是否明白科目内容。\n邀请学生递交课业的初稿，以确保内容在正确的方向之上。 ';
problem['2c']['suggestion']['12_result_cn']=' 难以理解及组织从参考资料中得到的重点并用于课业之上；\n书写课业时因要花时间去回想如何写某些字或如何书写句子，而打断了自己的思路；\n书写课业时经常混淆或忘记了需要的重点。 ';
problem['2c']['suggestion']['12_suggestion_cn']='为学生提供另类模式的教学材料（例如影片和信息图片），好以较低阅读需求的形式解释同样的科目内容。\n帮助学生在阅读材料中间出重点，或就着各重点之间的联系编写笔记，好让他/她组织不同的概念。\n为学生提供书写课业的架构和格式。\n容许学生递交课业的初稿，好让你能给予意见和建议。 ';
problem['2c']['suggestion']['General_result_cn']='';
problem['2c']['suggestion']['General_suggestion_cn']='协助学生有效地消化所有参考资料和教学资源，给予他/她提示好让他/她能找到当中的重点。\n协助学生理解重点和概念之间的联系，好使他/她能作出推论和归纳总结。\n应用不同视觉策略（例如脑图、图表、资讯图片、影片）以支援阅读能力较弱的学生。\n考虑把课业分拆成小部分，好让学生能更易掌握及完成。 ';
problem['2d']['suggestion']['1_result_cn']='难以专注于课业之上及做得非常缓慢；\n容易因其他想法或活动令自己分心，令自己不停拖延；\n在工作上经常不小心出错，令自己要花额外时间去修正。 ';
problem['2d']['suggestion']['1_suggestion_cn']='与学生讨论在工作时什么会令他/她容易分心。\n建议学生如何分拆工作， 好使他/她更容易专注于每一小部份。\n给予学生工作进度表，以了解应在何时完成课业中的不同部分，并用以检查自己的进度。\n建议学生找一个可以提醒自己工作时专注的学习伙伴。\n当专注问题持续时，建议学生向专业人士（例如精神科医生）寻求协助。 ';
problem['2d']['suggestion']['6_result_cn']='没有任何意识自己正在拖延；\n不知道自己已经完成课业中的多少部分；\n对于自己为什么会分心或为什么做事失败没有任何概念。 ';
problem['2d']['suggestion']['6_suggestion_cn']='与学生讨论工作缓慢的原因及所面对的问题。\n定期向学生发送提示以检视工作进度。\n把课业分拆成小部份，并请学生逐小部分完成及递交。 ';
problem['2d']['suggestion']['12_result_cn']='要花大量时间去阅读所有参考资料；\n无法从阅读参考资料得到足够和有用的材料去完成课业；\n需要额外时间去书写课业。 ';
problem['2d']['suggestion']['12_suggestion_cn']='为学生提供另类模式的教学材料（例如影片和信息图片），以减轻他/她的阅读压力。\n帮助学生在阅读材料中间出重点，或就着各重点之间的联系编写笔记，好让他/她组织不同的概念。\n为学生提供书写课业的架构和格式。\n容许学生递交课业的初稿，好让你能给予意见和建议。 ';
problem['2d']['suggestion']['General_result_cn']='';
problem['2d']['suggestion']['General_suggestion_cn']='为学生勾画一个课业应有的内容结构，好使他/她明白课业期望的 内容量。\n为学生提供更多指示，以了解如何为课业中每一部份搜集资料和加入内容重点。\n与学生讨论并了解他/她为完成课业所面对的各样困难。\n把课业分拆成小部分，好使学生感到有能力完成每一部份并提高动机。 ';
problem['3a']['suggestion']['1_result_cn']='难以在课堂或温习时专注；\n容易因自己的想法分心，使得无法在温习时把科目内容记好；\n容易因其他活动令自己分心，令自己不停拖延；\n在测验考试时经常不小心出错。 ';
problem['3a']['suggestion']['1_suggestion_cn']='与学生讨论在温习时什么会令他/她容易分心。\n建议学生如何把温习过程分成不同应付到的小节，好使他/她更容易专注。\n与学生讨论并给予温习进度表，好让他/她跟从并检查自己的进度。\n建议学生找一个可以提醒自己温习时专注的学习伙伴。\n当专注问题持续时，建议学生向专业人士（例如精神科医生）寻求协助。 ';
problem['3a']['suggestion']['4_result_cn']='难以记忆某些重点、事实和释义；\n在记忆中常常混淆相近的概念和资讯；\n在测验考试时会混淆或忘记了自己已经温习过的内容，尤其是当自己十分紧张时。 ';
problem['3a']['suggestion']['4_suggestion_cn']='为学生提供额外笔记以助记忆。\n帮助学生在阅读材料中间出重点，或就着各重点之间的联系编写笔记，好让他/她组织不同的概念。\n使用视觉学习工具（例如脑图及流程图）去解释科目内容及不同重点之间的联系。\n提供阅读材料以外的学习资源，例如：影片、资讯图片、网上小测验。 ';
problem['3a']['suggestion']['5_result_cn']='没有头绪该如何开始温习为测验作准备，例如不知道温习材料中哪些部分是较为重要和属于基本内容；\n不太了解考核内容及考核的期望；\n认为要温习的内容太多亦没有信心可以完成。 ';
problem['3a']['suggestion']['5_suggestion_cn']='向学生分享该如何为考试作准备及温习，提供具体方法并告诉他/她应该从何开始，例如应先阅读课本中的哪一个章节\n定期检查学生有否开始温习。\n给予学生课堂上小测验，以鼓励及引导他们逐少逐少定期温习。 ';
problem['3a']['suggestion']['6_result_cn']='没有任何意识自己正在拖延；\n不知道自己已经完成温习范围中的多少部分；\n对于自己为什么会分心或温习为什么会失效没有任何概念。 ';
problem['3a']['suggestion']['6_suggestion_cn']='与学生讨论工作缓慢的原因及所面对的问题。\n定期向学生发送提示以检视温习进度。\n建议学生把温习过程分拆成小部份，并逐步完成。 ';
problem['3a']['suggestion']['General_result_cn']='';
problem['3a']['suggestion']['General_suggestion_cn']='与学生讨论在温习中所面对的问题。\n给予学生开展温习的小提示，以及能增强学习和记忆的学习技巧。\n定期向学生发送提示和鼓励，以保持他/她持续温习的动机。\n帮助学生在阅读材料中间出重点，或就着各重点之间的联系编写笔记，好让他/她能明白和记忆不同的概念。\n建议学生使用不同的学习材料和学习策略，例如：脑图、流程图、影片、资讯图片、网上小测验，以掌握和记忆科目内容。\n建议学生找一个可以在温习时支援自己的学习伙伴。 ';
problem['3b']['suggestion']['1_result_cn']='难以在课堂或温习时专注；\n容易因自己的想法分心，使得无法在温习时把科目内容记好；\n没有耐性去拆解及理解科目内容中较艰深的部分。 ';
problem['3b']['suggestion']['1_suggestion_cn']='与学生讨论在课堂或温习时什么会令他/她容易分心。\n建议学生如何把温习过程分成不同应付到的小节，好使他/她更容易专注。\n与学生讨论并给予温习进度表，好让他/她跟从并检查自己的进度。\n建议学生找一个可以提醒自己温习时专注的学习伙伴。\n当专注问题持续时，建议学生向专业人士（例如精神科医生）寻求协助。 ';
problem['3b']['suggestion']['4_result_cn']='难以记忆某些重点、事实和释义；\n在记忆中常常混淆相近的概念和资讯；\n在测验考试时会混淆或忘记了自己已经温习过的内容，尤其是当自己十分紧张时。 ';
problem['3b']['suggestion']['4_suggestion_cn']='为学生提供额外笔记以助记忆。\n帮助学生在阅读材料中间出重点，或就着各重点之间的联系编写笔记，好让他/她组织不同的概念。\n使用视觉学习工具（例如脑图及流程图）去解释科目内容及不同重点之间的联系。\n提供阅读材料以外的学习资源，例如：影片、资讯图片、网上小测验。 ';
problem['3b']['suggestion']['7_result_cn']='无法把参考资料中零碎的资料组合成有意思的意念；\n难以组织各重点和意念并把它们放到答案中；\n无法归纳数据、资料和重点成为有用和有意义的结论。 ';
problem['3b']['suggestion']['7_suggestion_cn']='向学生解释不同参考资料的功用和它们之间的联系。\n为学生提供不同参考资料内容的简略总结笔记。\n或建议学生自己预备笔记，以帮助他/她消化及组织 从课堂上或参考资料中得来的不同重点。 ';
problem['3b']['suggestion']['8_result_cn']='对理解一些抽象的概念显得有些困难；\n察觉不到自己误解了一些课堂中提及的内容；\n回答问题时经常离题，只提及到自己沉醉的内容；\n当自己感到困惑或不明白时不会去求助。 ';
problem['3b']['suggestion']['8_suggestion_cn']='以具体语言及日常生活作例子，向学生清晰解说各科目内容、课业的要求和期望，并再三确认他/她是否明白自己需要做的事。\n在课堂上向学生提问以检查他/她是否明白科目内容。\n避免在课堂上使用抽象的语言，留意在使用比喻时学生是否真的明白。\n确保学生清楚了解考试的范围及形式。';
problem['3b']['suggestion']['General_result_cn']='';
problem['3b']['suggestion']['General_suggestion_cn']='协助学生有效地消化所有参考资料和教学资源，给予他/她提示好让他/她能找到当中的重点。\n协助学生理解重点和概念之间的联系，好使他/她能作出推论和归纳总结。\n应用不同视觉策略（例如脑图、图表、资讯图片、影片）以支援阅读能力较弱的学生。\n给学生建议有用的温习方法，包括上述的视觉学习策略，以及如何把温习分拆成小部分，以提高学生的动机。\n使用网上小测验去协助学生检查自己对科目内容掌握了多少。 ';
problem['3c']['suggestion']['10_result_cn']='当自己在测考当中十分紧张时，会混淆或忘记了自己已经温习过的内容；\n犹豫及不确定自己应该怎样回答问题；\n花上不少时间去处理自己的情绪，令自己无法完成试卷。 ';
problem['3c']['suggestion']['10_suggestion_cn']='与学生讨论他/她的担忧，和看看那担忧是否能解决或者减少。\n协助学生定下合理和能达成的考试成绩目标，以增强自信。\n在测验考试时肯定和鼓励学生。\n考虑给予学生额外的考试时间，以减低他/她的压力和给予他/她空间处理自己的情绪。\n当焦虑问题持续时，鼓励学生向专业人士（例如精神科医生）寻求协助。 ';
problem['3c']['suggestion']['General_result_cn']='';
problem['3c']['suggestion']['General_suggestion_cn']='解释清楚考试的安排和期望，让学生能作出更好的准备。\n协助学生好好准备应付考试，使他/她能更有信心。\n与学生认识各种应试策略以作好准备，例如当他/她不懂得如何作答某问题时可以怎样处理。 ';
problem['3d']['suggestion']['3_result_cn']='不太掌握该按什么步骤去完成小组课业；\n对管理自己的时间去配合组员的工作进度显得十分困难；\n当小组有新的任务时，难以调节自己的工作流程去配合。 ';
problem['3d']['suggestion']['3_suggestion_cn']='解释清楚小组课业的要求和期望，以及每一个人可以如何参与和贡献。\n在小组中安排一个可以和学生沟通的组长，并负责监察他/她的工作进度。\n协助学生改善他的时间管理能力，鼓励他/她每日安排特定时间去执行小组课业的工作。 ';
problem['3d']['suggestion']['8_result_cn']='难以从组员的角度去理解问题；\n当与组员未有共识时，固执得难以改变自己的想法；\n在书写自己的部分时，常常加入过多自己沉醉的内容，最后无法配合小组的主题；\n因为自己的社交能力问题，未能被自己的组员信任甚至被孤立。 ';
problem['3d']['suggestion']['8_suggestion_cn']='明确解释让学生知道自己可以如何在小组中参与和作出贡献。\n在小组中订立有利正面讨论的沟通规则。\n在学生的同意下，让各组员了解学生的特性及该如何与学生沟通。\n邀请学生递交小组课业自己部份的初稿，让你可以给予意见。 ';
problem['3d']['suggestion']['12_result_cn']='要花大量时间阅读参考资料去完成自己的部分，最后无法配合小组的工作期限；\n无法从阅读参考资料得到足够和有用的材料去做好自己的部份；\n书写出差劲及有大量错字的报告。 ';
problem['3d']['suggestion']['12_suggestion_cn']='帮助学生在阅读材料中间出重点，或就着各重点之间的联系编写笔记，好让他/她组织不同的概念。\n与学生讨论小组课业所期望的结构和格式。\n建议小组调节每个组员的角色和责任，使学生毋须负责一些需要大量阅读和书写的任务。 ';
problem['3d']['suggestion']['General_result_cn']='';
problem['3d']['suggestion']['General_suggestion_cn']='协助小组了解各组员的强项和弱项，并就着各人的能力分配工作。\n向学生略述小组课业的一般期望及他/她可以如何作出贡献。\n协助小组成员互相沟通，并帮他们订立小组的规则令沟通和合作更畅顺。 ';
problem['4']['suggestion']['2_result_cn']='对表达自己的意见有强烈欲望；\n当与人意见不同时，会较为情绪化和不安；\n容易冲动说出不该说的说话。 ';
problem['4']['suggestion']['2_suggestion_cn']='肯定学生的情绪，并认同他/她尝试为课堂作出贡献的意愿。\n提供让学生冷静下来的机会。\n提供其他途径让学生表达自己的意见，例如让他/她把自己的意见写在纸上留待课堂完结前讨论。 ';
problem['4']['suggestion']['8_result_cn']='不理解应该在课室中使用哪些恰当的语言和语气；\n难以从别人的角度去理解问题；\n在意见不合时反应过激，亦过于坚持自己的看法；\n难以用语言说出自己也不太理解的不安；\n没有意识自己的行为会影响到班中的其他人。 ';
problem['4']['suggestion']['8_suggestion_cn']='提醒学生其他人当时的感受。\n让学生和其他人都清楚明白各人各自的想法（例如把大家的观点写在黑板上）以便利进一步的讨论。\n向学生解释其他人会如何理解他/她的想法和他/她表达意见的方式。 ';
problem['4']['suggestion']['General_result_cn']='';
problem['4']['suggestion']['General_suggestion_cn']='客观指出学生冒犯性的行为，并重申在课堂中沟通和提出意见的基本规则，例如：恰当用字、互相尊重、轮流发言。\n明确指出及强调每个学生都有不同的经验知识背景和感受， 需要大家理解、接纳和尊重。\n容许暂停讨论并让学生写下他们的想法和感受，及利用时间决定大家应该如何处理是次讨论。\n邀请滋扰课堂的同学到班房外作单独对话。 ';
problem['5']['suggestion']['1_result_cn']='无法在课堂中专注，尤其是当感到沉闷时；\n留意不到自己在课堂中的状况；\n常常因自己的不专注而无法完成自己的日常工作，并影响到自己的睡眠。 ';
problem['5']['suggestion']['1_suggestion_cn']='与学生讨论经常因什么事情而在课堂中分心。\n邀请学生给予意见以令他/她更容易投入课堂。\n安排特别的学习小任务以保持学生参与课堂活动。\n肯定学生对回答问题的参与并作出鼓励，以提高他/她的动机。\n当专注问题持续时，建议学生向专业人士（例如精神科医生）寻求协助。 ';
problem['5']['suggestion']['9_result_cn']='没有精力参与课堂；\n经常因自己的忧虑而分心；\n因突然而来的情绪而无法集中精神。 ';
problem['5']['suggestion']['9_suggestion_cn']='对学生的感受显示同理心。\n给学生安排一些简单和容易处理的任务，好让他/她感到参与当中及有成功感。\n为学生安排课堂笔记使他/她不会错过课堂上的任何内容。\n鼓励学生向专业人士（例如精神科医生）寻求协助。 ';
problem['5']['suggestion']['General_result_cn']='';
problem['5']['suggestion']['General_suggestion_cn']='与学生讨论并显示你对他/她面对的困难之理解。\n容让学生按自己的步伐工作。\n寻找让学生逐步增加参与课堂的方法，例如给学生安排一些简单和容易处理的任务。 ';
problem['6']['suggestion']['10_result_cn']='因担心自己的表现而不敢在课堂中表达意见和参与；\n正感到极度惊恐，或担心自己将会发生这种惊恐的情况；\n对需要与人交谈或在大家面前说话感到十分紧张；\n对如何面对各种挑战感到十分犹豫，亦不知道如何处理这所带来的焦虑。 ';
problem['6']['suggestion']['10_suggestion_cn']='容许学生在课堂中感到极度惊恐时作短暂休息。\n为学生安排课堂笔记使他/她不会错过课堂上的任何内容。\n给学生安排一些简单和容易处理的任务，好让他/她感到参与当中及有成功感。\n鼓励学生向专业人士（例如精神科医生）寻求协助。 ';
problem['6']['suggestion']['General_result_cn']='';
problem['6']['suggestion']['General_suggestion_cn']='对学生的感受显示同理心。\n避免在课堂中向学生发问。\n尝试了解学生的困难和担忧，看看可以提供什么协助。 ';
problem['7']['suggestion']['8_result_cn']='不了解在社交接触时的应有行为；\n不察觉自己在别人眼中的外貌模样；\n以不寻常的语调说话，或常常重覆某些字眼；\n有非一般的想法和做法，而此与他/她的独特兴趣有关；\n对噪音或其他刺激显得异常敏感；\n冲动或情绪化；\n没有意识自己的行为会影响到班中的其他人。 ';
problem['7']['suggestion']['8_suggestion_cn']='与学生对话并尝试了解他/她的需要\n提醒学生其他人对他/她的行为之感受。\n为课堂中的沟通方法及合理行为订立规则。\n在课堂中安排学习伙伴支援学生。 ';
problem['7']['suggestion']['11_result_cn']='无法组织自己的想法和说话；\n日常生活十分混乱， 影响到自己的工作什至个人卫生；\n有非一般的想法和做法，而此通常与他/她的妄想有关；\n在课堂中经历幻觉而不知道应该如何处理；\n因害怕别人知道自己的问题，而不太敢表达或显得退缩。 ';
problem['7']['suggestion']['11_suggestion_cn']='与学生对话并尝试了解他/她的需要。\n与学生讨论他/她在课堂中感到不安时，期望得到怎样的协助。\n容许学生在课堂中需要时作短暂休息。\n鼓励学生向专业人士（例如精神科医生）寻求协助。 ';
problem['7']['suggestion']['General_result_cn']='';
problem['7']['suggestion']['General_suggestion_cn']='尽量将学生当作一般正常人看待。\n向学生展示你的同理心和尊重。\n尝试了解他的需要及看看可以提供怎样的帮助。\n协助其他同学了解该学生的需要。\n需要时可向大学的辅导员寻求协助。 ';
problem['8']['suggestion']['1_result_cn']='无法在课堂中专注，尤其是当感到沉闷时；\n留意不到自己在课堂中的状况；\n常常因自己的不专注而无法完成自己的日常工作，并影响到自己的睡眠。 ';
problem['8']['suggestion']['1_suggestion_cn']='与学生讨论经常因什么事情而在课堂中分心。\n邀请学生给予意见以令他/她更容易投入课堂。\n安排特别的学习小任务以保持学生参与课堂活动。\n肯定学生对回答问题的参与并作出鼓励，以提高他/她的动机。\n当专注问题持续时，建议学生向专业人士（例如精神科医生）寻求协助。 ';
problem['8']['suggestion']['8_result_cn']='因与自己独特兴趣有关的想法而分心并沉醉当中；\n没察觉自己不专注；\n由于感官异常敏感，容易因噪音或其他刺激而分心。 ';
problem['8']['suggestion']['8_suggestion_cn']='与学生讨论经常因什么事情而在课堂中分心。\n尝试移除班房中一些容意令学生分心的刺激。\n多些在课堂中提醒学生保持专注。\n安排特别的学习小任务以保持学生参与课堂活动。 ';
problem['8']['suggestion']['11_result_cn']='因妄想而联想到将有事情会发生，而受到干扰 ；\n在课堂中经历幻觉而不知道应该如何处理；\n 因无法处理日常生活并影响到睡眠，所以缺乏精力专注上课。 ';
problem['8']['suggestion']['11_suggestion_cn']='与学生对话并尝试了解他/她的需要。\n与学生讨论他/她在课堂中感到不安时，期望得到怎样的协助。\n容许学生在课堂中需要时作短暂休息。\n鼓励学生向专业人士（例如精神科医生）寻求协助。 ';
problem['8']['suggestion']['General_result_cn']='';
problem['8']['suggestion']['General_suggestion_cn']='与学生讨论并显示你对他/她面对的困难之理解。\n安排特别的学习小任务以保持学生参与课堂活动及保持专注。\n在教学材料中加入一些提高动机的主题， 并应用视觉策略以提高学生的专注（例如：短片）。\n在课堂中安排学习伙伴协助提醒学生留心及专注于工作。 ';
problem['9']['suggestion']['1_result_cn']='容易忘记自己的时间表；\n没有留意时间亦很少查看自己的手表；\n常常因自己的不专注而无法完成自己的日常工作，并影响到睡眠令自己在早上无法起床上课。 ';
problem['9']['suggestion']['1_suggestion_cn']='与学生讨论对管理自己时间表的困难。\n为学生提供有效率工作的策略以节省自己的工作时间。\n建议学生找一个可以提醒自己工作时专注和准时上课的学习伙伴。 ';
problem['9']['suggestion']['3_result_cn']='很少检查自己的日程；\n难以安排好时间在上课之前完成自己本来要完成的工作；\n认为有许多任务比上课更加重要。 ';
problem['9']['suggestion']['3_suggestion_cn']='为学生提供能增加工作效率的工作步骤和框架。\n与学生一起计划每天的生活和工作流程。\n与学生讨论各样工作的优次及准时上课的重要性。 ';
problem['9']['suggestion']['9_result_cn']='没有精力上课；\n正在经历抑郁的发作期，而要花时间处理好情绪；\n对上课和学习充满忧虑，从而减低了自己上课的动机；\n因睡眠受到影响，令自己在早上无法起床上课。 ';
problem['9']['suggestion']['9_suggestion_cn']='对学生的感受显示同理心。\n与学生讨论在有限的精力下该如何安排各样工作的优次，好使他/她能安排时间上课。\n为学生安排课堂笔记使他/她不会错过课堂上的任何内容。\n鼓励学生向专业人士（例如精神科医生）寻求协助。 ';
problem['9']['suggestion']['11_result_cn']='因妄想扭曲了自己的想法，从而减低了自己上课的动机；\n因混乱的想法令自己的生活十分混乱，甚至忘记了要上课；\n因睡眠受到影响，令自己在早上无法起床上课。 ';
problem['9']['suggestion']['11_suggestion_cn']='与学生对话并尝试了解他/她的需要。\n与学生讨论他/她在课堂中感到不安时，期望得到怎样的协助。\n容许学生在课堂中需要时作短暂休息。\n鼓励学生向专业人士（例如精神科医生）寻求协助。 ';
problem['9']['suggestion']['General_result_cn']='';
problem['9']['suggestion']['General_suggestion_cn']='尝试理解学生每天的生活流程及面对那些困难。\n就着他/她的困难提供实际有用的解决方法。\n确保学生能在你的课堂中得到一点成功感。你可以安排一些简单学习任务或在课堂结束前给予一个容易的小测验，以增强他/她的自信。 ';
problem['10']['suggestion']['2_result_cn']='对表达自己的意见有强烈欲望；\n当自己的观点未被他人了解时会感到挫败；\n容易冲动说话并忘记社会规则。';
problem['10']['suggestion']['2_suggestion_cn']='肯定学生在课堂中尝试作出贡献的意欲。\n协助学生以有组织性的方法及合适的态度表达自己的意见，并在你归纳了他/她的意见后再次给予回应。\n提供其他途径让学生表达自己的意见，例如让他/她把自己的意见写在纸上留待课堂完结前讨论。 ';
problem['10']['suggestion']['8_result_cn']='不了解在课堂中的应有社交活动；\n沉溺于与自己独特兴趣有关的话题；\n难以处理自己的冲动特性；\n不了解其他人的需要，亦没有意识自己的行为会影响到班中的其他人。 ';
problem['10']['suggestion']['8_suggestion_cn']='留意并避免一些学生容易纠缠的话题。\n重申在课堂中沟通和提出意见的 基本规则，例如：恰当用字、互相尊重、轮流发言。\n向学生解释其他人会如何理解他/她的想法和他/她表达意见的方式。 ';
problem['10']['suggestion']['General_result_cn']='';
problem['10']['suggestion']['General_suggestion_cn']='尝试即时回应学生的问题，并尝试引导讨论到另一话题。\n让学生意识到你欣赏哪一种参与课堂的方式。\n把问题写在黑板上并让所有学生写下他们对此问题的意见。\n如有需要可邀请学生到班房外作单独对话。 ';
problem['11']['suggestion']['2_result_cn']='对表达自己的意见有强烈欲望，亦需要其他人配合自己的需要；\n当别人无法掌握自己的想法时会感到十分不安及情绪化；\n容易冲动说出不该说的话。 ';
problem['11']['suggestion']['2_suggestion_cn']='确认学生当时的情绪及表达自己意见的渴望。\n为学生提供有效令自己冷静的机会及策略。\n提供其他途径让学生表达自己的意见，例如让他/她把自己的意见写在纸上留待课堂完结前讨论。 ';
problem['11']['suggestion']['8_result_cn']='不理解应该在课室中使用哪些恰当的语言和语气；\n难以从别人的角度去理解问题；\n在意见不合时反应过激，亦过于坚持自己的看法；\n难以用语言说出自己也不太理解的不安；\n没有意识自己的行为会影响到班中的其他人。 ';
problem['11']['suggestion']['8_suggestion_cn']='提醒学生其他人当时的感受。\n让学生和其他人都清楚明白各人各自的想法（例如把大家的观点写在黑板上）以便利进一步的讨论。\n向学生解释其他人会如何理解他/她的想法和他/她表达意见的方式。 ';
problem['11']['suggestion']['11_result_cn']='因妄想征状而刺激了情绪或扭曲了对其他人的想法；\n正经历幻觉 而感到十分不安；\n因混乱的想法而无法好好表达自己。 ';
problem['11']['suggestion']['11_suggestion_cn']='如情况许可，尽量回应学生的需要。\n提醒学生在课堂中的应有行为。\n避免和学生争论或讨论任何他/她妄想的内容，而应给予他/她肯定而简单的指令。 ';
problem['11']['suggestion']['General_result_cn']='';
problem['11']['suggestion']['General_suggestion_cn']='即时客观指出学生冒犯性的行为，并重申在课堂中沟通和应有行为的基本规则，例如：恰当用字、互相尊重、轮流发言。\n明确指出及强调每个学生都有不同的经验、知识背景和感受，需要大家理解、接纳和尊重。\n容许暂停讨论并让学生写下他们的想法和感受，及利用时间决定大家应该如何处理是次讨论。\n邀请滋扰课堂的同学到班房外作单独对话。';
