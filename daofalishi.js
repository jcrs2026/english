const questionList =[
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）四川岷江上的世界文化遗产，“深淘滩，低作堰”，造福千秋，它是？</div>`,
        correct: "都江堰",
        opts: ["都江堰", "大运河", "长城", "灵渠"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）南北朝马头鹿形金步摇，原是汉族头饰，鲜卑人南迁后喜爱并使用，反映了？</div>`,
        correct: "民族交融",
        opts: ["三国鼎立", "江南开发", "民族交融", "交通进步"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）曲辕犁、唐三彩、长安城平面图，最恰当主题是？</div>`,
        correct: "繁荣的社会经济",
        opts: ["开放社会风气", "繁荣的社会经济", "文学艺术成就", "科举制度完善"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）洋务运动发展近代电讯事业的直接目的是？</div>`,
        correct: "军事与国防需要",
        opts: ["发展民族工业", "军事与国防需要", "便利民间通讯", "学习西方制度"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）五四运动相较辛亥革命最突出的进步之处是？</div>`,
        correct: "工人阶级登上历史舞台",
        opts: ["青年学生充当先锋", "工人阶级登上历史舞台", "传播马克思主义", "群众参与更加广泛"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）1921年志士齐聚上海法租界望志路的主要目的是？</div>`,
        correct: "召开中共一大",
        opts: ["发动二次革命", "召开中共一大", "组织工人运动", "领导北伐战争"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）杨靖宇严寒中宁死不屈，彰显的精神是？</div>`,
        correct: "视死如归、宁死不屈",
        opts: ["艰苦奋斗、精益求精", "勤俭节约、一丝不苟", "信念坚定、求真务实", "视死如归、宁死不屈"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）1949年毛泽东提出中国命运掌握在人民手中，主要任务是？</div>`,
        correct: "筹备成立中华人民共和国",
        opts: ["筹备成立中华人民共和国", "开展抗美援朝战争", "实施一五计划建设", "进行三大改造运动"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）国内生产总值持续增长示意图说明新时代我国？</div>`,
        correct: "经济建设取得巨大成就",
        opts: ["文化事业繁荣发展", "外交事业不断推进", "国防军队深化改革", "经济建设取得巨大成就"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉中考）万隆会议石油政策共识直接促成了？</div>`,
        correct: "石油输出国组织成立",
        opts: ["亚非民族独立实现", "两极世界格局瓦解", "计划经济普遍实行", "石油输出国组织成立"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉中考）青铜利簋铭文“武王征商，唯甲子朝”记载的史实是？</div>`,
        correct: "武王伐纣",
        opts: ["西周分封诸侯", "武王伐纣", "春秋诸侯争霸", "战国各国变法"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉中考）精美“秦砖汉瓦”主要反映秦汉时期？</div>`,
        correct: "手工业技术高超",
        opts: ["建筑工程规模宏大", "手工业技术高超", "文学艺术异彩纷呈", "社会经济高度发达"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉中考）李大钊面对酷刑坚守信仰，体现的品质是？</div>`,
        correct: "坚持真理、坚守理想",
        opts: ["艰苦奋斗、勤俭节约", "谦虚谨慎、不骄不躁", "敢闯敢试、勇于创新", "坚持真理、坚守理想"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉中考）新中国第一辆解放牌汽车诞生于哪一时期？</div>`,
        correct: "一五计划时期",
        opts: ["土地改革时期", "一五计划时期", "三大改造时期", "改革开放新时期"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉中考）1978年以来我国经济体制改革的目标是？</div>`,
        correct: "建立社会主义市场经济体制",
        opts: ["推行家庭联产承包责任制", "扩大国有企业经营自主权", "建立社会主义市场经济体制", "大力发展多种所有制经济"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉四调）春秋吴国古城布局共同特点是？</div>`,
        correct: "重视水道与防御结合",
        opts: ["严格遵循礼制等级", "商业功能十分突出", "重视水道与防御结合", "单纯军事城堡为主"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉四调）士人装束从庄重束发到长发宽衣变化反映？</div>`,
        correct: "思想多元发展",
        opts: ["南北文化深度融合", "民族交流日益加深", "庄园经济逐步盛行", "思想多元发展"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉四调）孙中山与李鸿章对甲午战败反思不同的根本原因是？</div>`,
        correct: "阶级立场不同",
        opts: ["所处时代环境不同", "所持史料类型不同", "个人研究视角不同", "阶级立场不同"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉四调）1925—1927年中共强调建设群众政党，表明党？</div>`,
        correct: "重视组织建设与群众基础",
        opts: ["放弃城市革命斗争", "重视组织建设与群众基础", "确立农村革命道路", "摆脱共产国际影响"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉四调）贾湖遗址龟甲兼具占卜与乐器功能，体现先民？</div>`,
        correct: "创新智慧与多元用途",
        opts: ["灵龟崇拜十分盛行", "原始文字正式形成", "天人沟通思想萌芽", "创新智慧与多元用途"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武昌五调）曾侯乙编钟集中体现先秦什么文明成就？</div>`,
        correct: "青铜文明辉煌",
        opts: ["礼乐制度日趋巩固", "王室地位走向衰微", "农耕生产工具进步", "青铜文明辉煌"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武昌五调）西汉初年社会残破到长安繁华的主要原因是？</div>`,
        correct: "推行休养生息政策",
        opts: ["全国大一统局面完成", "推行休养生息政策", "丝绸之路正式开通", "实行盐铁专卖政策"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025洪山5月调考）多地新石器遗址出土龙形器物说明？</div>`,
        correct: "中华文明多元一体",
        opts: ["地理环境决定文明特征", "中华文明多元一体", "农耕文明已高度发达", "社会阶级分化明显"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025洪山5月调考）武汉西周属楚、秦属南郡、元属湖广行省，依次对应制度是？</div>`,
        correct: "分封制、郡县制、行省制",
        opts: ["分封制、行省制、郡县制", "郡县制、分封制、行省制", "分封制、郡县制、行省制", "行省制、郡县制、分封制"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025黄陂三模）我国现存最早中医学理论典籍是？</div>`,
        correct: "《黄帝内经》",
        opts: ["《黄帝内经》", "《伤寒杂病论》", "《本草纲目》", "《神农本草经》"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025黄陂三模）丝绸之路互通物产、技术与文化，主要作用是？</div>`,
        correct: "促进东西方经贸文化往来",
        opts: ["推动边疆民族深度交融", "巩固国家大一统格局", "强化中央管辖西域地区", "促进东西方经贸文化往来"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025青山五调）曾侯乙编钟工艺水平代表当时？</div>`,
        correct: "青铜铸造最高水平",
        opts: ["礼乐制度发展成熟", "青铜铸造最高水平", "古代音乐艺术巅峰", "手工业行业分工细致"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025青山五调）文景之治与光武中兴出现的共同原因是？</div>`,
        correct: "轻徭薄赋、休养生息",
        opts: ["大力加强中央集权", "轻徭薄赋、休养生息", "独尊儒家思想文化", "严厉打击地方豪强"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025四区联考）《资政新篇》最突出的特点是？</div>`,
        correct: "提出发展资本主义的设想",
        opts: ["主张彻底废除封建土地", "提出发展资本主义的设想", "单纯学习西方先进技术", "根本目的维护清朝统治"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025四区联考）百日维新最主要的历史功绩是？</div>`,
        correct: "在社会上起到思想启蒙作用",
        opts: ["成功挽救民族危亡", "实现君主立宪政治", "在社会上起到思想启蒙作用", "促进民族资本主义发展"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024蔡甸二模）春秋战国百家争鸣局面出现的根本原因是？</div>`,
        correct: "社会大变革",
        opts: ["学术文化下移民间", "社会大变革", "诸侯争霸战乱不休", "私学教育逐渐兴起"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024蔡甸二模）秦朝推行“书同文”统一使用的标准字体是？</div>`,
        correct: "小篆",
        opts: ["甲骨文", "金文", "小篆", "隶书"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025江夏模拟）隋唐科举制的本质作用是？</div>`,
        correct: "选拔人才、加强皇权",
        opts: ["实现绝对公平选官", "扩大封建统治基础", "选拔人才、加强皇权", "打破世家门阀垄断"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025江夏模拟）北宋时期四川地区出现的世界最早纸币是？</div>`,
        correct: "交子",
        opts: ["会子", "交子", "宝钞", "钱引"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025东西湖模拟）元朝专门管辖西藏地区的中央机构是？</div>`,
        correct: "宣政院",
        opts: ["西域都护", "伊犁将军", "宣政院", "驻藏大臣"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025东西湖模拟）郑和下西洋船队最远到达的地区是？</div>`,
        correct: "红海沿岸、非洲东海岸",
        opts: ["整个印度洋沿岸", "地中海沿岸地区", "红海沿岸、非洲东海岸", "大西洋非洲沿岸"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025江岸模拟）《南京条约》给中国带来最严重的影响是？</div>`,
        correct: "中国开始沦为半殖民地半封建社会",
        opts: ["割让领土香港岛", "赔付巨额战争银元", "开放多处通商口岸", "中国开始沦为半殖民地半封建社会"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025江岸模拟）《马关条约》中严重阻碍中国民族工业发展的条款是？</div>`,
        correct: "允许日本在通商口岸开设工厂",
        opts: ["割让台湾及附属岛屿", "赔偿巨额军费白银", "开放沙市重庆等口岸", "允许日本在通商口岸开设工厂"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025江汉模拟）辛亥革命最伟大的历史意义是？</div>`,
        correct: "结束了中国两千多年君主专制制度",
        opts: ["建立了中华民国临时政府", "民主共和观念深入人心", "结束了中国两千多年君主专制制度", "彻底推翻清王朝统治"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025江汉模拟）新文化运动前期高举的两大旗帜是？</div>`,
        correct: "民主与科学",
        opts: ["自强、求富", "变法、图强", "民主与科学", "民族、民权、民生"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025汉阳模拟）南昌起义最重要的历史地位是？</div>`,
        correct: "打响了武装反抗国民党反动派的第一枪",
        opts: ["标志人民军队正式创建", "打响了武装反抗国民党反动派的第一枪", "开辟农村革命根据地", "开启红军战略大转移"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025汉阳模拟）遵义会议最主要的历史意义是？</div>`,
        correct: "挽救了党、挽救了红军、挽救了中国革命",
        opts: ["确立毛泽东最高领导地位", "挽救了党、挽救了红军、挽救了中国革命", "彻底纠正党内左倾错误", "使红军从此转危为安"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025新洲模拟）西安事变和平解决的重大意义是？</div>`,
        correct: "十年内战基本结束，抗日民族统一战线初步形成",
        opts: ["十年内战基本结束，抗日民族统一战线初步形成", "标志全国性抗日战争开始", "实现国共两党正式合作", "抗日民族统一战线正式形成"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025新洲模拟）抗日战争中百团大战的直接指挥者是？</div>`,
        correct: "彭德怀",
        opts: ["朱德", "彭德怀", "刘伯承", "贺龙"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉模拟）新中国土地改革的核心内容是？</div>`,
        correct: "废除封建剥削土地制度，实行农民土地所有制",
        opts: ["实行土地全民国有化", "废除封建剥削土地制度，实行农民土地所有制", "推行农业集体化经营", "实行家庭联产承包责任制"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉模拟）我国第一个五年计划建设的重点是？</div>`,
        correct: "优先发展重工业",
        opts: ["重点发展农业生产", "大力发展轻工业", "优先发展重工业", "全面发展交通运输"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉模拟）中共十一届三中全会作出的历史性决策是？</div>`,
        correct: "实行改革开放",
        opts: ["坚持以阶级斗争为纲", "实行改革开放", "确立市场经济体制", "加入世界贸易组织"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2024武汉模拟）邓小平理论被确立为党的指导思想是在哪次会议？</div>`,
        correct: "中共十五大",
        opts: ["中共十二大", "中共十三大", "中共十四大", "中共十五大"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉模拟）古埃及文明最典型的象征建筑是？</div>`,
        correct: "金字塔",
        opts: ["空中花园", "金字塔", "帕特农神庙", "罗马圆形竞技场"]
    },
    {
        subject: "lishi",
        content: `<div style="font-size: 24px;">（2025武汉模拟）《汉谟拉比法典》的根本目的是？</div>`,
        correct: "维护奴隶主阶级利益",
        opts: ["维护平民阶层利益", "维护广大奴隶利益", "维护奴隶主阶级利益", "体现社会民主平等"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武汉中考）中学时代是生命馈赠的成长礼物，下列说法正确的是？</div>`,
        correct: "为人生奠定重要基础",
        opts: ["只为升学应付考试", "为人生奠定重要基础", "可以随心所欲放纵", "与人生成长无关"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武汉中考）少年有梦，实现梦想的关键在于？</div>`,
        correct: "努力行动坚持不懈",
        opts: ["坐等运气降临", "努力行动坚持不懈", "依靠父母安排", "只空想不付出"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武汉四调）正确认识自己有利于完善自我，对待他人评价应该？</div>`,
        correct: "理性冷静虚心接纳",
        opts: ["全盘否定拒绝", "理性冷静虚心接纳", "盲目全部听从", "置之不理无视"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武昌五调）友谊的特质是平等双向、心灵相遇，呵护友谊需要？</div>`,
        correct: "尊重对方把握界限分寸",
        opts: ["干涉隐私控制对方", "尊重对方把握界限分寸", "攀比嫉妒猜忌", "利益至上互相利用"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025洪山模拟）网络交往具有虚拟、平等、自主特点，我们要？</div>`,
        correct: "理性辨别慎重结交网友",
        opts: ["轻信网友泄露隐私", "理性辨别慎重结交网友", "沉迷网络荒废学业", "线下随意约见陌生人"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025江岸模拟）教师是人类灵魂工程师，教师的根本使命是？</div>`,
        correct: "教书育人",
        opts: ["只传授课本知识", "教书育人", "只看重考试分数", "只管纪律不管成长"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025江汉模拟）孝亲敬长既是传统美德，也是？</div>`,
        correct: "公民必须履行的法定义务",
        opts: ["可有可无的小事", "公民必须履行的法定义务", "成年后才需要做", "只是道德提倡无强制"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025汉阳模拟）情绪有喜怒哀惧多样变化，调控情绪首先要？</div>`,
        correct: "接纳情绪学会合理调节",
        opts: ["压抑情绪绝不流露", "接纳情绪学会合理调节", "任意发泄不顾他人", "忽视情绪任由发展"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025东西湖模拟）美好集体具备的共同特征是？</div>`,
        correct: "民主公正、充满关怀、善于合作",
        opts: ["拉帮结派排斥他人", "民主公正、充满关怀、善于合作", "自私自利各自为战", "只讲竞争不讲互助"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024武汉中考）个人利益与集体利益发生冲突时应当？</div>`,
        correct: "坚持集体利益至上",
        opts: ["优先考虑个人利益", "坚持集体利益至上", "两者都置之不理", "牺牲集体成全个人"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024武汉四调）法律区别于道德、纪律最主要特征是？</div>`,
        correct: "由国家强制力保证实施",
        opts: ["靠社会舆论维持", "由国家强制力保证实施", "靠自觉良心遵守", "靠风俗习惯约束"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024黄陂模拟）未成年人四道保护防线中，基础防线是？</div>`,
        correct: "家庭保护",
        opts: ["学校保护", "家庭保护", "社会保护", "司法保护"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024江夏模拟）我国宪法规定，国家一切权力属于？</div>`,
        correct: "人民",
        opts: ["政府官员", "人民", "企业老板", "社会组织"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武汉中考）我国的根本制度是？</div>`,
        correct: "社会主义制度",
        opts: ["人民代表大会制度", "社会主义制度", "基层群众自治制度", "民族区域自治制度"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武汉四调）我国人民行使国家权力的根本政治制度是？</div>`,
        correct: "人民代表大会制度",
        opts: ["多党合作政治协商制度", "人民代表大会制度", "市场经济体制", "社会主义制度"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025四区联考）我国处理民族关系的基本原则是？</div>`,
        correct: "民族平等、民族团结、各民族共同繁荣",
        opts: ["民族隔离互不往来", "民族平等、民族团结、各民族共同繁荣", "民族同化消除差异", "民族分立自主发展"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025青山模拟）总体国家安全观的宗旨是？</div>`,
        correct: "人民安全",
        opts: ["政治安全", "国土安全", "人民安全", "军事安全"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025新洲模拟）维护国家安全、荣誉和利益是公民的？</div>`,
        correct: "法定基本义务",
        opts: ["自愿可选行为", "法定基本义务", "只是军人职责", "与中学生无关"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024武汉中考）改革开放对中国发展的定位是？</div>`,
        correct: "决定当代中国命运的关键抉择",
        opts: ["临时短期政策", "决定当代中国命运的关键抉择", "只影响经济领域", "可以随时停止"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024武汉四调）新时代我国社会的主要矛盾是？</div>`,
        correct: "人民美好生活需要和不平衡不充分的发展之间的矛盾",
        opts: ["阶级对立矛盾", "人民美好生活需要和不平衡不充分的发展之间的矛盾", "城乡完全对立矛盾", "贫富不可调和矛盾"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武昌模拟）党和政府发展的根本目的是？</div>`,
        correct: "增进民生福祉",
        opts: ["单纯追求经济增速", "增进民生福祉", "只重视城市发展", "积累财富忽视民生"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025洪山模拟）在国家发展全局中，创新是？</div>`,
        correct: "引领发展的第一动力",
        opts: ["可有可无的点缀", "引领发展的第一动力", "只限于军工科技", "依靠引进无需自主"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025江岸模拟）教育是国之大计、党之大计，根本任务是？</div>`,
        correct: "立德树人",
        opts: ["唯分数论应试", "立德树人", "只教职业技能", "只为升学服务"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025江汉模拟）我国社会主义民主政治的本质特征是？</div>`,
        correct: "人民当家作主",
        opts: ["官员做主决策", "人民当家作主", "精英少数做主", "政党包办一切"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025汉阳模拟）公民参与民主生活，下列行为不可取的是？</div>`,
        correct: "网络造谣煽动民意",
        opts: ["参与民主选举", "网络造谣煽动民意", "参与民主决策", "参与民主监督"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025东西湖模拟）法治社会建设的基本要求是？</div>`,
        correct: "实行良法之治、实行善治",
        opts: ["权大于法人情办事", "实行良法之治、实行善治", "因人而异随意执法", "只靠道德不靠法律"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024蔡甸模拟）依法治国的根本依据和核心是？</div>`,
        correct: "依宪治国",
        opts: ["依政策治国", "依宪治国", "依道德治国", "依行政命令治国"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024黄陂模拟）中华优秀传统文化的显著特点是？</div>`,
        correct: "源远流长、博大精深",
        opts: ["短暂单一浅显", "源远流长、博大精深", "封闭僵化不变", "全盘落后无价值"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024江夏模拟）中华民族伟大民族精神的核心是？</div>`,
        correct: "爱国主义",
        opts: ["改革创新", "爱国主义", "团结统一", "勤劳勇敢"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武汉中考）当今时代弘扬的时代精神核心是？</div>`,
        correct: "改革创新",
        opts: ["爱国主义", "改革创新", "艰苦奋斗", "爱好和平"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武汉四调）我国人口现状的基本特点是？</div>`,
        correct: "人口基数大，人口素质偏低",
        opts: ["人口数量逐年锐减", "人口基数大，人口素质偏低", "人口素质普遍超高", "人口结构完全合理"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武昌五调）节约资源、保护环境属于我国的？</div>`,
        correct: "基本国策",
        opts: ["发展战略", "基本国策", "根本制度", "临时政策"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025洪山模拟）实现中华民族伟大复兴中国梦必须走？</div>`,
        correct: "中国特色社会主义道路",
        opts: ["照搬西方发展道路", "中国特色社会主义道路", "封闭僵化老路", "依附他国发展道路"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025江岸模拟）中国梦的基本内涵是？</div>`,
        correct: "国家富强、民族振兴、人民幸福",
        opts: ["个人暴富贪图享乐", "国家富强、民族振兴、人民幸福", "只追求军事强大", "只看重经济总量"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025江汉模拟）当今世界时代的主题是？</div>`,
        correct: "和平与发展",
        opts: ["战争与对抗", "和平与发展", "冷战与对立", "封闭与割据"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025汉阳模拟）世界多极化发展趋势带来的主要作用是？</div>`,
        correct: "有利于维护世界和平与发展",
        opts: ["加剧大国争霸战乱", "有利于维护世界和平与发展", "强化单边霸权主义", "阻碍国际合作交流"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024蔡甸模拟）面对不同国家文明交流，我们要？</div>`,
        correct: "兼收并蓄、交流互鉴",
        opts: ["唯我独尊排斥异己", "兼收并蓄、交流互鉴", "全盘照搬外来文明", "彻底否定本土文化"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024黄陂模拟）中国在国际事务中始终扮演的角色是？</div>`,
        correct: "负责任的大国",
        opts: ["只顾自身发展", "负责任的大国", "推行霸权主义", "逃避国际责任"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2024江夏模拟）青少年适应时代发展、成长成才的关键是？</div>`,
        correct: "在实践中学习、锤炼自我",
        opts: ["死读书脱离实践", "在实践中学习、锤炼自我", "坐等父母安排", "空想不付诸行动"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025新洲模拟）践行社会主义核心价值观重在？</div>`,
        correct: "落细落小、知行合一",
        opts: ["停留在口号宣传", "落细落小、知行合一", "与日常生活脱节", "只要求他人不律己"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武汉中考）宪法的核心价值追求是？</div>`,
        correct: "规范国家权力运行，保障公民权利",
        opts: ["只约束普通公民", "规范国家权力运行，保障公民权利", "扩大公职人员特权", "限制公民合法自由"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武汉四调）公民最基本、最重要的权利是？</div>`,
        correct: "人身自由权利",
        opts: ["政治选举权利", "人身自由权利", "经济财产权利", "文化教育权利"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025武昌模拟）公民合法权益受到侵害时，正确维权方式是？</div>`,
        correct: "协商、调解、仲裁、诉讼",
        opts: ["暴力报复私了", "协商、调解、仲裁、诉讼", "造谣抹黑对方", "聚众闹事施压"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025洪山模拟）关于自由与社会规则关系说法正确的是？</div>`,
        correct: "规则划定自由边界，保障自由实现",
        opts: ["规则完全束缚自由", "规则划定自由边界，保障自由实现", "自由可以不受规则约束", "规则与自由毫无关系"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025江岸模拟）公平对社会发展的重要价值是？</div>`,
        correct: "是社会稳定和进步的重要基础",
        opts: ["只会制造社会矛盾", "是社会稳定和进步的重要基础", "对个人成长无意义", "只能依靠施舍获得"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025江汉模拟）正义是社会文明的尺度，守护正义需要？</div>`,
        correct: "勇气智慧，依法维护",
        opts: ["冷漠旁观事不关己", "勇气智慧，依法维护", "冲动行事不顾法律", "偏袒亲友不讲原则"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025汉阳模拟）我国基本经济制度中，主体地位的经济形式是？</div>`,
        correct: "公有制经济",
        opts: ["个体经济", "私营经济", "公有制经济", "外资经济"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025东西湖模拟）基层群众自治制度的典型形式是？</div>`,
        correct: "村民委员会、居民委员会",
        opts: ["职工代表大会", "村民委员会、居民委员会", "行业协会组织", "政府派出机构"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025东西湖模拟）经济全球化发展带来的积极作用是？</div>`,
        correct: "促进商品、资本、人才全球流动",
        opts: ["割裂各国经济联系", "促进商品、资本、人才全球流动", "只利好弱小国家", "消灭各国民族经济"]
    },
    {
        subject: "daofa",
        content: `<div style="font-size: 24px;">（2025青山模拟）初中毕业生进行职业选择应当？</div>`,
        correct: "兼顾个人兴趣特长与国家社会需要",
        opts: ["只看薪资待遇高低", "兼顾个人兴趣特长与国家社会需要", "鄙视平凡基层职业", "盲目跟风扎堆热门"]
    },
];
