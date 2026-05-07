const questionList = [
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_01.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 sinA = ?</div>
        `, 
        correct: "a/c", 
        opts: ["a/c", "b/c", "c/a", "a/b"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_01.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 cosA = ?</div>
        `, 
        correct: "b/c", 
        opts: ["a/c", "b/c", "c/a", "a/b"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_01.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 tanA = ?</div>
        `, 
        correct: "a/b", 
        opts: ["a/c", "b/c", "c/a", "a/b"] 
    },
     { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_01.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 sinB = ?</div>
        `, 
        correct: "b/c", 
        opts: ["a/c", "b/c", "c/b", "a/b"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_01.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 cosB = ?</div>
        `, 
        correct: "a/c", 
        opts: ["a/c", "b/c", "c/b", "a/b"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_01.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 tanB = ?</div>
        `, 
        correct: "b/a", 
        opts: ["a/c", "b/c", "b/a", "a/b"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_02.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 sin30° = ?</div>
        `, 
        correct: "1/2", 
        opts: ["1/2", "√3/2", "√2/2", "1"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_02.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 cos30° = ?</div>
        `, 
        correct: "√3/2", 
        opts: ["1/2", "√3/2", "√2/2", "1"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_02.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 tan30° = ?</div>
        `, 
        correct: "√3/3", 
        opts: ["√3/3", "√3", "1/√3", "√2"] 
    },
     { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_02.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 sin60° = ?</div>
        `, 
        correct: "√3/2", 
        opts: ["1/2", "√3/2", "√2/2", "1"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_02.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 cos60° = ?</div>
        `, 
        correct: "1/2", 
        opts: ["1/2", "√3/2", "√2/2", "1"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_三角形_02.jpg" alt="三角函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求 tan60° = ?</div>
        `, 
        correct: "√3", 
        opts: ["√3/3", "√3", "1/√3", "√2"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_反比例_01.jpg" alt="反比例函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求k的值?</div>
        `, 
        correct: "k>0", 
        opts: ["k>0", "k<0", "k=0", "k≠0"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_反比例_02.jpg" alt="反比例函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">求k的值?</div>
        `, 
        correct: "k<0", 
        opts: ["k>0", "k<0", "k=0", "k≠0"] 
    },
    { 
        subject: "math",
        content: `
            <img src="pic/数学_反比例_01.jpg" alt="反比例函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">x>0时, y的变化?</div>
        `, 
        correct: "x>0,y随x增大而减小", 
        opts: ["x>0,y随x增大而增大", "x>0,y随x增大而减小", "x<0,y随x增大而增大", "x<0,y随x增大而减小"] 
    },
    { 
        subject: "math",
        content: `
            <img src="pic/数学_反比例_01.jpg" alt="反比例函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">x<0时, y的变化?</div>
        `, 
        correct: "x<0,y随x增大而减小", 
        opts: ["x>0,y随x增大而增大", "x>0,y随x增大而减小", "x<0,y随x增大而增大", "x<0,y随x增大而减小"] 
    },
    { 
        subject: "math",
        content: `
            <img src="pic/数学_反比例_02.jpg" alt="反比例函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">x>0时, y的变化?</div>
        `, 
        correct: "x>0,y随x增大而增大", 
        opts: ["x>0,y随x增大而增大", "x>0,y随x增大而减小", "x<0,y随x增大而增大", "x<0,y随x增大而减小"] 
    },
    { 
        subject: "math",
        content: `
            <img src="pic/数学_反比例_02.jpg" alt="反比例函数示意图">
            <div style="margin-top: 10px; font-size: 24px;">x<0时, y的变化?</div>
        `, 
        correct: "x<0,y随x增大而增大", 
        opts: ["x>0,y随x增大而增大", "x>0,y随x增大而减小", "x<0,y随x增大而增大", "x<0,y随x增大而减小"] 
    },
    { 
        subject: "math",
        content: `
            <img src="pic/数学_圆_01.jpg" alt="圆示意图">
            <div style="margin-top: 10px; font-size: 24px;">已知AC是直径,∠BOC=70°, 求∠BAC的度数.</div>
        `, 
        correct: "35°", 
        opts: ["35°", "55°", "110°", "90°"] 
    },
    { 
        subject: "math",
        content: `
            <img src="pic/数学_圆_01.jpg" alt="圆示意图">
            <div style="margin-top: 10px; font-size: 24px;">已知AC是直径,∠BOC=70°, 求∠BDC的度数.</div>
        `, 
        correct: "35°", 
        opts: ["35°", "55°", "110°", "90°"] 
    },
    { 
        subject: "math",
        content: `
            <img src="pic/数学_圆_01.jpg" alt="圆示意图">
            <div style="margin-top: 10px; font-size: 24px;">已知AC是直径,∠BOC=70°, 求∠ABC的度数.</div>
        `, 
        correct: "90°", 
        opts: ["35°", "55°", "110°", "90°"] 
    },
    { 
        subject: "math",
        content: `<div style="font-size: 24px;">-5 的相反数是？</div>`, 
        correct: "5", 
        opts: ["-5", "5", "1/5", "-1/5"] 
    },
    { 
        subject: "math",
        content: `<div style="font-size: 24px;">3 的倒数是？</div>`, 
        correct: "1/3", 
        opts: ["-3", "3", "1/3", "-1/3"] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_01.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，成像特点及应用</div>
        `, 
        correct: "倒立、缩小的实像，应用于照相机", 
        opts: [
            "倒立、缩小的实像，应用于照相机", 
            "倒立、等大的实像，应用于测量焦距",
            "倒立、放大的实像，应用于投影仪、幻灯机",
            "正立、放大的虚像，应用于放大镜",
        ] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_02.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，成像特点及应用</div>
        `, 
        correct: "倒立、等大的实像，应用于测量焦距", 
        opts: [
            "倒立、缩小的实像，应用于照相机", 
            "倒立、等大的实像，应用于测量焦距",
            "倒立、放大的实像，应用于投影仪、幻灯机",
            "正立、放大的虚像，应用于放大镜",
        ] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_03.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，成像特点及应用</div>
        `, 
        correct: "倒立、放大的实像，应用于投影仪、幻灯机", 
        opts: [
            "倒立、缩小的实像，应用于照相机", 
            "倒立、等大的实像，应用于测量焦距",
            "倒立、放大的实像，应用于投影仪、幻灯机",
            "不成像，应用于探照灯",
        ] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_04.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，成像特点及应用</div>
        `, 
        correct: "不成像，应用于探照灯", 
        opts: [
            "倒立、等大的实像，应用于测量焦距",
            "倒立、放大的实像，应用于投影仪、幻灯机",
            "不成像，应用于探照灯",
            "正立、放大的虚像，应用于放大镜",
        ] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_05.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，成像特点及应用</div>
        `, 
        correct: "正立、放大的虚像，应用于放大镜", 
        opts: [
            "倒立、缩小的实像，应用于照相机", 
            "倒立、等大的实像，应用于测量焦距",
            "不成像，应用于探照灯",
            "正立、放大的虚像，应用于放大镜",
        ] 
    },
    // --- 力学 ---
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">速度公式 v = ?</div>`, 
        correct: "s/t", 
        opts: ["s/t", "t/s", "s·t", "s+t"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">密度公式 ρ = ?</div>`, 
        correct: "m/V", 
        opts: ["m/V", "V/m", "m·V", "m+V"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">重力公式 G = ?</div>`, 
        correct: "mg", 
        opts: ["mg", "m/g", "m+g", "m-g"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">压强定义式 p = ?</div>`, 
        correct: "F/S", 
        opts: ["F/S", "S/F", "F·S", "F+S"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">液体压强公式 p = ?</div>`, 
        correct: "ρgh", 
        opts: ["ρgh", "ρg/h", "ρ+h", "ρ/g h"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">功的计算公式 W = ?</div>`, 
        correct: "Fs", 
        opts: ["Fs", "F/s", "F+s", "F-t"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">功率公式 P = ?</div>`, 
        correct: "W/t", 
        opts: ["W/t", "t/W", "W·t", "W-t"] 
    },
    // --- 电学 ---
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">欧姆定律 I = ?</div>`, 
        correct: "U/R", 
        opts: ["U/R", "R/U", "U·R", "U+R"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">电功公式 W = ?</div>`, 
        correct: "UIt", 
        opts: ["UIt", "UI/t", "U+It", "U/I t"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">电功率公式 P = ?</div>`, 
        correct: "UI", 
        opts: ["UI", "U/I", "I/U", "U+I"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">焦耳定律 Q = ?</div>`, 
        correct: "I²Rt", 
        opts: ["I²Rt", "IRt", "I²R/t", "I²t/R"] 
    },
    // --- 热学 ---
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">比热容公式 Q = ?</div>`, 
        correct: "cmΔt", 
        opts: ["cmΔt", "c/m Δt", "c+m Δt", "cm/Δt"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">热值公式 Q = ?</div>`, 
        correct: "mq", 
        opts: ["mq", "m/q", "m+q", "m-q"] 
    },
    
    // --- 机械能及其转化 ---
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">自由下落的苹果，能量如何转化？</div>`, 
        correct: "重力势能转化为动能", 
        opts: ["动能转化为重力势能", "重力势能转化为动能", "弹性势能转化为动能", "动能转化为弹性势能"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">竖直上抛的小球在上升过程中？</div>`, 
        correct: "动能转化为重力势能", 
        opts: ["重力势能转化为动能", "动能转化为重力势能", "动能转化为弹性势能", "内能转化为动能"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">拉弯的弓把箭射出去？</div>`, 
        correct: "弹性势能转化为动能", 
        opts: ["动能转化为弹性势能", "弹性势能转化为动能", "重力势能转化为动能", "化学能转化为动能"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">滚摆下降过程中？</div>`, 
        correct: "重力势能转化为动能", 
        opts: ["动能转化为重力势能", "重力势能转化为动能", "弹性势能转化为动能", "动能转化为内能"] 
    },
    // --- 内能与热机 ---
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">钻木取火是通过什么方式改变内能？</div>`, 
        correct: "做功", 
        opts: ["热传递", "做功", "辐射", "对流"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">热水袋暖手是通过什么方式改变内能？</div>`, 
        correct: "热传递", 
        opts: ["做功", "热传递", "辐射", "压缩"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">汽油机的做功冲程，能量如何转化？</div>`, 
        correct: "内能转化为机械能", 
        opts: ["机械能转化为内能", "内能转化为机械能", "化学能转化为内能", "电能转化为机械能"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">汽油机的压缩冲程，能量如何转化？</div>`, 
        correct: "机械能转化为内能", 
        opts: ["内能转化为机械能", "机械能转化为内能", "化学能转化为内能", "内能转化为化学能"] 
    },

    // --- 电能与其他能的转化 ---
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">电动机工作时主要将电能转化为？</div>`, 
        correct: "机械能", 
        opts: ["内能", "机械能", "光能", "化学能"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">发电机工作时主要将机械能转化为？</div>`, 
        correct: "电能", 
        opts: ["内能", "机械能", "电能", "光能"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">给蓄电池充电时，能量如何转化？</div>`, 
        correct: "电能转化为化学能", 
        opts: ["化学能转化为电能", "电能转化为化学能", "电能转化为内能", "机械能转化为电能"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">电风扇工作时，大部分电能转化为？</div>`, 
        correct: "机械能", 
        opts: ["内能", "机械能", "光能", "声能"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">电饭锅工作时，电能主要转化为？</div>`, 
        correct: "内能", 
        opts: ["机械能", "内能", "光能", "化学能"] 
    },
    // --- 综合/其他 ---
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">太阳能电池板工作时？</div>`, 
        correct: "光能转化为电能", 
        opts: ["电能转化为光能", "光能转化为电能", "化学能转化为电能", "内能转化为电能"] 
    },
    { 
        subject: "physics",
        content: `<div style="font-size: 24px;">植物进行光合作用？</div>`, 
        correct: "光能转化为化学能", 
        opts: ["化学能转化为光能", "光能转化为化学能", "内能转化为化学能", "光能转化为内能"] 
    },
        // --- 物质的变化与性质 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">下列属于化学变化的是？</div>`, 
        correct: "铁生锈", 
        opts: ["冰雪融化", "铁生锈", "酒精挥发", "矿石粉碎"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">下列属于物理性质的是？</div>`, 
        correct: "导电性", 
        opts: ["可燃性", "氧化性", "导电性", "酸碱性"] 
    },

    // --- 空气与氧气 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">空气中体积分数最大的气体是？</div>`, 
        correct: "氮气 (N₂)", 
        opts: ["氧气 (O₂)", "氮气 (N₂)", "二氧化碳 (CO₂)", "稀有气体"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">测定空气中氧气含量实验常用的药品是？</div>`, 
        correct: "红磷", 
        opts: ["木炭", "硫粉", "红磷", "铁丝"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">实验室制取氧气，加入二氧化锰的作用是？</div>`, 
        correct: "催化作用", 
        opts: ["增加产量", "催化作用", "作为反应物", "提高温度"] 
    },

    // --- 微观粒子与元素 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">保持水化学性质的最小粒子是？</div>`, 
        correct: "水分子", 
        opts: ["氢原子", "氧原子", "水分子", "氢离子"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">决定元素种类的是？</div>`, 
        correct: "质子数", 
        opts: ["中子数", "电子数", "质子数", "最外层电子数"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">地壳中含量最多的金属元素是？</div>`, 
        correct: "铝 (Al)", 
        opts: ["铁 (Fe)", "铝 (Al)", "氧 (O)", "硅 (Si)"] 
    },

    // --- 化学式与化合价 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">高锰酸钾 (KMnO₄) 中 Mn 的化合价是？</div>`, 
        correct: "+7", 
        opts: ["+4", "+6", "+7", "+5"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">下列符号既能表示一种元素，又能表示一个原子的是？</div>`, 
        correct: "Cu", 
        opts: ["H₂", "O", "2N", "Cu"] 
    },

    // --- 质量守恒与方程式 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">化学反应前后，一定不变的是？</div>`, 
        correct: "原子种类", 
        opts: ["分子种类", "原子种类", "物质种类", "分子数目"] 
    },

    // --- 碳和碳的氧化物 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">金刚石和石墨物理性质差异大的原因是？</div>`, 
        correct: "碳原子排列方式不同", 
        opts: ["原子种类不同", "原子大小不同", "碳原子排列方式不同", "原子数量不同"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">常用于灭火的气体是？</div>`, 
        correct: "二氧化碳", 
        opts: ["氧气", "氢气", "二氧化碳", "氮气"] 
    },

    // --- 金属与溶液 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">人类使用最早的金属是？</div>`, 
        correct: "铜", 
        opts: ["铁", "铝", "铜", "金"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">铁生锈的条件是？</div>`, 
        correct: "同时接触水和氧气", 
        opts: ["只接触水", "只接触氧气", "同时接触水和氧气", "接触干燥空气"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">溶液一定是？</div>`, 
        correct: "混合物", 
        opts: ["纯净物", "化合物", "混合物", "单质"] 
    },

    // --- 酸碱盐 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">下列物质呈酸性的是？</div>`, 
        correct: "食醋", 
        opts: ["肥皂水", "食盐水", "食醋", "石灰水"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">pH < 7 的溶液能使紫色石蕊变？</div>`, 
        correct: "红色", 
        opts: ["蓝色", "红色", "无色", "黄色"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">俗称“纯碱”的物质是？</div>`, 
        correct: "碳酸钠 (Na₂CO₃)", 
        opts: ["氢氧化钠 (NaOH)", "碳酸钠 (Na₂CO₃)", "碳酸氢钠 (NaHCO₃)", "氯化钠 (NaCl)"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">中和反应的实质是？</div>`, 
        correct: "H⁺ + OH⁻ = H₂O", 
        opts: ["生成沉淀", "生成气体", "H⁺ + OH⁻ = H₂O", "电子转移"] 
    },
    // --- 一、单质 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">金属铁的化学式是？</div>`, 
        correct: "Fe", 
        opts: ["Fe₂", "Fe", "Fe³⁺", "FeO"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">常温下唯一的液态金属汞（水银）？</div>`, 
        correct: "Hg", 
        opts: ["Ag", "Hg", "Mg", "He"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">空气中含量最多的气体（氮气）？</div>`, 
        correct: "N₂", 
        opts: ["O₂", "N₂", "CO₂", "Ne"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">金刚石和石墨均由什么元素组成？</div>`, 
        correct: "C", 
        opts: ["Si", "C", "S", "P"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">常用于填充霓虹灯的稀有气体氖气？</div>`, 
        correct: "Ne", 
        opts: ["He", "Ne", "Ar", "N₂"] 
    },

    // --- 二、氧化物 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">俗称“生石灰”主要成分？</div>`, 
        correct: "CaO", 
        opts: ["Ca(OH)₂", "CaCO₃", "CaO", "CaCl₂"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">铁锈的主要成分？</div>`, 
        correct: "Fe₂O₃", 
        opts: ["FeO", "Fe₃O₄", "Fe₂O₃", "Fe(OH)₃"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">磁铁矿的主要成分？</div>`, 
        correct: "Fe₃O₄", 
        opts: ["Fe₂O₃", "Fe₃O₄", "FeO", "FeS₂"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">实验室制氧气常用的“双氧水”？</div>`, 
        correct: "H₂O₂", 
        opts: ["H₂O", "H₂O₂", "HO₂", "H₂O₃"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">干冰 主要成分？</div>`, 
        correct: "CO₂", 
        opts: ["CO", "CO₂", "SO₂", "NO₂"] 
    },

    // --- 三、酸 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">人体胃液中含有的酸？</div>`, 
        correct: "HCl", 
        opts: ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">汽车铅蓄电池中含有的酸？</div>`, 
        correct: "H₂SO₄", 
        opts: ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">食醋中含有的酸？</div>`, 
        correct: "CH₃COOH", 
        opts: ["HCl", "H₂SO₄", "CH₃COOH", "HNO₃"] 
    },

    // --- 四、碱 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">俗称“烧碱、火碱”主要成分？</div>`, 
        correct: "NaOH", 
        opts: ["Ca(OH)₂", "NaOH", "KOH", "Na₂CO₃"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">俗称“熟石灰、消石灰”的主要成分？</div>`, 
        correct: "Ca(OH)₂", 
        opts: ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">改良酸性土壤常用的碱是？</div>`, 
        correct: "Ca(OH)₂", 
        opts: ["NaOH", "Ca(OH)₂", "KOH", "NH₃·H₂O"] 
    },

    // --- 五、盐 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">俗称“纯碱、苏打”的主要成分？</div>`, 
        correct: "Na₂CO₃", 
        opts: ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">俗称“小苏打”的主要成分？</div>`, 
        correct: "NaHCO₃", 
        opts: ["Na₂CO₃", "NaHCO₃", "NaCl", "NaNO₃"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">大理石、石灰石的主要成分？</div>`, 
        correct: "CaCO₃", 
        opts: ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">配制生理盐水使用的盐？</div>`, 
        correct: "NaCl", 
        opts: ["KCl", "NaCl", "CaCl₂", "MgCl₂"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">蓝色晶体“胆矾、蓝矾”？</div>`, 
        correct: "CuSO₄·5H₂O", 
        opts: ["CuSO₄", "CuSO₄·5H₂O", "Cu(OH)₂", "CuO"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">农业上常用作复合肥的主要成分？</div>`, 
        correct: "KNO₃", 
        opts: ["KCl", "KNO₃", "NH₄Cl", "Ca₃(PO₄)₂"] 
    },

    // --- 六、常见有机物 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">天然气、沼气的主要成分？</div>`, 
        correct: "CH₄", 
        opts: ["C₂H₅OH", "CH₄", "CO", "H₂"] 
    },
    { 
        subject: "chemistry",
        content: `俗称“纯碱、苏打”的主要成分？`, 
        correct: "Na₂CO₃", 
        opts: ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"] 
    },
    { 
        subject: "chemistry",
        content: `俗称“小苏打”的主要成分？`, 
        correct: "NaHCO₃", 
        opts: ["Na₂CO₃", "NaCl", "NaOH", "NaHCO₃"] 
    },
    { 
        subject: "chemistry",
        content: `俗称“烧碱、火碱、苛性钠”的主要成分？`, 
        correct: "NaOH", 
        opts: ["NaCl", "Na₂CO₃", "NaOH", "Ca(OH)₂"] 
    },
    { 
        subject: "chemistry",
        content: `俗称“熟石灰、消石灰”的主要成分？`, 
        correct: "Ca(OH)₂", 
        opts: ["NaOH", "CaO", "Ca(OH)₂", "NaCl"] 
    },
    { 
        subject: "chemistry",
        content: `俗称“生石灰”的氧化钙？`, 
        correct: "CaO", 
        opts: ["Ca(OH)₂", "CaCO₃", "CaO", "NaCl"] 
    },
    { 
        subject: "chemistry",
        content: `俗称“食盐”的氯化钠？`, 
        correct: "NaCl", 
        opts: ["Na₂CO₃", "NaOH", "NaCl", "NaHCO₃"] 
    },
    { 
        subject: "chemistry",
        content: `大理石、石灰石主要成分碳酸钙？`, 
        correct: "CaCO₃", 
        opts: ["CaO", "Ca(OH)₂", "CaCO₃", "NaCl"] 
    },
    { 
        subject: "chemistry",
        content: `俗称“灰锰氧”的高锰酸钾？`, 
        correct: "KMnO₄", 
        opts: ["K₂MnO₄", "KClO₃", "KMnO₄", "KCl"] 
    },
    { 
        subject: "chemistry",
        content: `双氧水的主要成分？`, 
        correct: "H₂O₂", 
        opts: ["H₂O", "CO₂", "H₂O₂", "O₂"] 
    },
    { 
        subject: "chemistry",
        content: `天然气、沼气主要成分？`, 
        correct: "CH₄", 
        opts: ["C₂H₅OH", "CH₃COOH", "CH₄", "C₆H₁₂O₆"] 
    },
    { 
        subject: "chemistry",
        content: `铁锈主要成分氧化铁？`, 
        correct: "Fe₂O₃", 
        opts: ["Fe₃O₄", "FeO", "Fe₂O₃", "CuO"] 
    },
    { 
        subject: "chemistry",
        content: `四氧化三铁的化学式？`, 
        correct: "Fe₃O₄", 
        opts: ["Fe₂O₃", "FeO", "Fe₃O₄", "FeCl₃"] 
    },
    { 
        subject: "chemistry",
        content: `氧气的化学式？`, 
        correct: "O₂", 
        opts: ["O", "H₂O", "CO₂", "O₂"] 
    },
    { 
        subject: "chemistry",
        content: `氢气的化学式？`, 
        correct: "H₂", 
        opts: ["H", "H₂O", "H₂", "CO"] 
    },
    { 
        subject: "chemistry",
        content: `氮气的化学式？`, 
        correct: "N₂", 
        opts: ["N", "NO", "NO₂", "N₂"] 
    },
    { 
        subject: "chemistry",
        content: `水的化学式？`, 
        correct: "H₂O", 
        opts: ["H₂O₂", "H₂", "O₂", "H₂O"] 
    },
    { 
        subject: "chemistry",
        content: `二氧化碳的化学式？`, 
        correct: "CO₂", 
        opts: ["CO", "C", "CO₂", "O₂"] 
    },
    { 
        subject: "chemistry",
        content: `一氧化碳的化学式？`, 
        correct: "CO", 
        opts: ["CO₂", "C", "O₂", "CO"] 
    },
    { 
        subject: "chemistry",
        content: `盐酸的化学式？`, 
        correct: "HCl", 
        opts: ["H₂SO₄", "HNO₃", "HCl", "H₂CO₃"] 
    },
    { 
        subject: "chemistry",
        content: `硫酸的化学式？`, 
        correct: "H₂SO₄", 
        opts: ["HCl", "HNO₃", "H₂SO₄", "H₂CO₃"] 
    },
    { 
        subject: "chemistry",
        content: `硝酸的化学式？`, 
        correct: "HNO₃", 
        opts: ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"] 
    },
    { 
        subject: "chemistry",
        content: `碳酸的化学式？`, 
        correct: "H₂CO₃", 
        opts: ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"] 
    },
    { 
        subject: "chemistry",
        content: `铜的化学式？`, 
        correct: "Cu", 
        opts: ["CuO", "Cu(OH)₂", "CuSO₄", "Cu"] 
    },
    { 
        subject: "chemistry",
        content: `铁的化学式？`, 
        correct: "Fe", 
        opts: ["Fe₂O₃", "FeCl₃", "FeSO₄", "Fe"] 
    },
    { 
        subject: "chemistry",
        content: `铝的化学式？`, 
        correct: "Al", 
        opts: ["Al₂O₃", "AlCl₃", "Al₂(SO₄)₃", "Al"] 
    },
    { 
        subject: "chemistry",
        content: `氯酸钾的化学式？`, 
        correct: "KClO₃", 
        opts: ["KMnO₄", "K₂MnO₄", "KClO₃", "KCl"] 
    },
    { 
        subject: "chemistry",
        content: `五氧化二磷的化学式？`, 
        correct: "P₂O₅", 
        opts: ["P", "PO₂", "P₂O₃", "P₂O₅"] 
    },
    { 
        subject: "physics",
        content: `下列关于杠杆平衡条件的说法，正确的是？`, 
        correct: "动力×动力臂 = 阻力×阻力臂（F₁L₁ = F₂L₂）", 
        opts: ["动力×阻力 = 动力臂×阻力臂", "动力×动力臂 = 阻力×阻力臂（F₁L₁ = F₂L₂）", "动力 + 动力臂 = 阻力 + 阻力臂", "动力臂×阻力 = 动力×阻力臂"] 
    },
    { 
        subject: "physics",
        content: `下列工具中，属于省力杠杆的是？`, 
        correct: "撬棍", 
        opts: ["筷子", "镊子", "撬棍", "钓鱼竿"] 
    },
    { 
        subject: "physics",
        content: `杠杆的五要素不包括下列哪一项？`, 
        correct: "支点距", 
        opts: ["支点", "动力", "阻力臂", "支点距"] 
    },
    { 
        subject: "physics",
        content: `下列关于费力杠杆的特点，正确的是？`, 
        correct: "动力臂小于阻力臂，省距离、费力", 
        opts: ["动力臂大于阻力臂，省力、费距离", "动力臂小于阻力臂，省距离、费力", "动力臂等于阻力臂，不省力也不费力", "动力臂小于阻力臂，省力、费距离"] 
    },
    { 
        subject: "physics",
        content: `用杠杆提起重物时，若动力臂是阻力臂的2倍，则动力是阻力的？`, 
        correct: "1/2", 
        opts: ["2倍", "1/2", "4倍", "1/4"] 
    },
    { 
        subject: "physics",
        content: `下列工具中，属于等臂杠杆的是？`, 
        correct: "天平", 
        opts: ["剪刀", "天平", "开瓶器", "划船的船桨"] 
    },
    { 
        subject: "physics",
        content: `关于杠杆作图，下列说法错误的是？`, 
        correct: "动力臂是支点到动力作用点的距离", 
        opts: ["阻力的方向总是阻碍杠杆转动", "动力臂是支点到动力作用线的垂直距离", "动力臂是支点到动力作用点的距离", "画力臂时需用虚线并标注垂直符号"] 
    },
    { 
        subject: "physics",
        content: `用杠杆平衡条件计算时，下列注意事项正确的是？`, 
        correct: "动力臂和阻力臂的单位必须统一", 
        opts: ["动力和阻力的单位可以不统一", "动力臂和阻力臂的单位必须统一", "无需考虑力的方向，直接代入数值计算", "动力臂越长，杠杆一定越省力"] 
    },
    { 
        subject: "physics",
        content: `下列关于杠杆应用的说法，错误的是？`, 
        correct: "筷子是省力杠杆，方便夹取食物", 
        opts: ["撬棍利用省力杠杆原理省力", "筷子是费力杠杆，省距离方便操作", "筷子是省力杠杆，方便夹取食物", "天平利用等臂杠杆原理测量质量"] 
    },
    { 
        subject: "physics",
        content: `杠杆处于平衡状态时，下列说法正确的是？`, 
        correct: "杠杆可能静止，也可能做匀速转动", 
        opts: ["杠杆一定处于静止状态", "杠杆一定做匀速转动", "杠杆可能静止，也可能做匀速转动", "杠杆的动力一定等于阻力"] 
    },
    { 
        subject: "physics",
        content: `要使杠杆更省力，下列方法可行的是？`, 
        correct: "增大动力臂，减小阻力臂", 
        opts: ["增大动力臂，减小阻力臂", "减小动力臂，增大阻力臂", "增大动力，减小阻力", "减小动力，增大阻力"] 
    },
    { 
        subject: "physics",
        content: `下列关于支点的说法，正确的是？`, 
        correct: "支点是杠杆绕着转动的固定点", 
        opts: ["支点一定在杠杆的中点", "支点是杠杆绕着转动的固定点", "支点必须在杠杆的一端", "杠杆可以没有支点"] 
    },
    { 
        subject: "physics",
        content: `用一个重10N的物体作为阻力，动力臂为0.4m，阻力臂为0.2m，所需动力为？`, 
        correct: "5N", 
        opts: ["5N", "10N", "20N", "40N"] 
    },
    { 
        subject: "physics",
        content: `下列关于杠杆的说法，正确的是？`, 
        correct: "杠杆可以是直的，也可以是弯的", 
        opts: ["杠杆一定是直的，不能是弯的", "杠杆可以是直的，也可以是弯的", "所有杠杆都能省力", "所有杠杆都能省距离"] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_力学_01.jpg" alt="物理力学图">
            <div style="margin-top: 10px; font-size: 24px;">物体的重力G = ？</div>
        `, 
        correct: "10N", 
        opts: ["6N", "10N","4N","不确定",
        ] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_力学_01.jpg" alt="物理力学图">
            <div style="margin-top: 10px; font-size: 24px;">浮力F = ？</div>
        `, 
        correct: "4N", 
        opts: ["6N", "10N","4N","不确定",
        ] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_一元一次_01.jpg" alt="一元一次示意图">
            <div style="margin-top: 10px; font-size: 24px;">如图y=kx+b, k=? b=?</div>
        `, 
        correct: "k>0,b>0", 
        opts: ["k>0,b>0", "k>0,b<0", "k<0,b>0", "k<0,b<0"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_一元一次_02.jpg" alt="一元一次示意图">
            <div style="margin-top: 10px; font-size: 24px;">如图y=kx+b, k=? b=?</div>
        `, 
        correct: "k>0,b<0", 
        opts: ["k>0,b>0", "k>0,b<0", "k<0,b>0", "k<0,b<0"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_一元一次_03.jpg" alt="一元一次示意图">
            <div style="margin-top: 10px; font-size: 24px;">如图y=kx+b, k=? b=?</div>
        `, 
        correct: "k<0,b>0", 
        opts: ["k>0,b>0", "k>0,b<0", "k<0,b>0", "k<0,b<0"] 
    },
    { 
        subject: "math", 
        content: `
            <img src="pic/数学_一元一次_04.jpg" alt="一元一次示意图">
            <div style="margin-top: 10px; font-size: 24px;">如图y=kx+b, k=? b=?</div>
        `, 
        correct: "k<0,b<0", 
        opts: ["k>0,b>0", "k>0,b<0", "k<0,b>0", "k<0,b<0"] 
    },
    { 
        subject: "physics", 
        content: `
            <img src="pic/物理_电磁_01.jpg" alt="物理_电磁示意图">
            <div style="margin-top: 10px; font-size: 24px;">原理相同的是?</div>
        `, 
        correct: "电动机", 
        opts: ["电动机", "发电机", "电铃", "指南针"] 
    },
    { 
        subject: "physics", 
        content: `
            <img src="pic/物理_电磁_02.jpg" alt="物理_电磁示意图">
            <div style="margin-top: 10px; font-size: 24px;">原理相同的是?</div>
        `, 
        correct: "电动机", 
        opts: ["电动机", "发电机", "电铃", "指南针"] 
    },
    { 
        subject: "physics", 
        content: `
            <img src="pic/物理_电磁_03.jpg" alt="物理_电磁示意图">
            <div style="margin-top: 10px; font-size: 24px;">原理相同的是?</div>
        `, 
        correct: "电动机", 
        opts: ["电动机", "发电机", "电铃", "指南针"] 
    },
    { 
        subject: "physics", 
        content: `
            <img src="pic/物理_电磁_04.jpg" alt="物理_电磁示意图">
            <div style="margin-top: 10px; font-size: 24px;">原理相同的是?</div>
        `, 
        correct: "发电机", 
        opts: ["电动机", "发电机", "电铃", "指南针"] 
    },
    { 
        subject: "physics", 
        content: `
            <img src="pic/物理_电磁_05.jpg" alt="物理_电磁示意图">
            <div style="margin-top: 10px; font-size: 24px;">原理相同的是?</div>
        `, 
        correct: "发电机", 
        opts: ["电动机", "发电机", "电铃", "指南针"] 
    },
    { 
        subject: "physics", 
        content: `
            <img src="pic/物理_电磁_06.jpg" alt="物理_电磁示意图">
            <div style="margin-top: 10px; font-size: 24px;">原理相同的是?</div>
        `, 
        correct: "发电机", 
        opts: ["电动机", "发电机", "电铃", "指南针"] 
    },
    { 
        subject: "physics", 
        content: `
            <img src="pic/物理_电磁_07.jpg" alt="物理_电磁示意图">
            <div style="margin-top: 10px; font-size: 24px;">原理相同的是?</div>
        `, 
        correct: "电铃", 
        opts: ["电动机", "发电机", "电铃", "指南针"] 
    },
    { 
        subject: "physics",
        content: `黄鹤楼中吹玉笛，能分辨出是笛子发出的声音，主要依靠声音的哪个特性？`, 
        correct: "音色", 
        opts: ["音调", "响度", "音色", "频率"] 
    },
    { 
        subject: "physics",
        content: `超声波清洗机可以清洗眼镜，主要利用声音的什么作用？`, 
        correct: "传递能量", 
        opts: ["传递信息", "传递能量", "反射成像", "折射放大"] 
    },
    { 
        subject: "physics",
        content: `武汉地铁屏蔽门玻璃能形成人像倒影，成像原理是？`, 
        correct: "光的反射", 
        opts: ["光的直线传播", "光的反射", "光的折射", "光的色散"] 
    },
    { 
        subject: "physics",
        content: `夏天从冰箱拿出冰饮料，外壁会“冒汗”，这种物态变化是？`, 
        correct: "液化", 
        opts: ["汽化", "液化", "升华", "凝固"] 
    },
    { 
        subject: "physics",
        content: `汽车发动机常用水来做冷却剂，主要利用水的什么特点？`, 
        correct: "比热容大", 
        opts: ["密度大", "比热容大", "沸点高", "导热性好"]
    },
    { 
        subject: "physics",
        content: `家用电饭煲煮饭，主要利用的电流效应是？`, 
        correct: "电流热效应", 
        opts: ["电流磁效应", "电流热效应", "电磁感应", "静电感应"] 
    },
    { 
        subject: "physics",
        content: `三脚插头中间较长的插脚，主要连接用电器的哪个部位？`, 
        correct: "金属外壳", 
        opts: ["内部电路", "金属外壳", "发热电阻", "开关"] 
    },
    { 
        subject: "physics",
        content: `武汉长江大桥桥墩做得十分宽大，主要目的是？`, 
        correct: "减小压强", 
        opts: ["增大压力", "减小压力", "增大压强", "减小压强"] 
    },
    { 
        subject: "physics",
        content: `新能源汽车刹车时可以回收能量，利用的物理原理是？`, 
        correct: "电磁感应", 
        opts: ["通电导体受力运动", "电磁感应", "电流热效应", "磁极相互作用"] 
    },
    { 
        subject: "physics",
        content: `路边高架安装隔音屏障，主要在哪个环节减弱噪声？`, 
        correct: "传播过程中", 
        opts: ["声源处", "传播过程中", "人耳处", "无法减弱噪声"] 
    },
    { 
        subject: "physics",
        content: `手机自拍杆拉长时增大物距，所成的像会？`, 
        correct: "变小", 
        opts: ["变大", "变小", "不变", "先变大后变小"] 
    },
    { 
        subject: "physics",
        content: `江滩夜晚水中的楼宇倒影，形成原因是？`, 
        correct: "光的反射", 
        opts: ["光的折射", "光的反射", "光的色散", "光沿直线传播"] 
    },
    { 
        subject: "physics",
        content: `太阳能光伏发电板工作时，能量转化是？`, 
        correct: "太阳能转化为电能", 
        opts: ["电能转化为太阳能", "太阳能转化为内能", "太阳能转化为电能", "内能转化为电能"] 
    },
    { 
        subject: "physics",
        content: `使用筷子夹菜时，筷子属于哪种杠杆？`, 
        correct: "费力杠杆", 
        opts: ["省力杠杆", "费力杠杆", "等臂杠杆", "不是杠杆"] 
    },
    { 
        subject: "physics",
        content: `冬天用热水袋取暖，主要改变人体内能的方式是？`, 
        correct: "热传递", 
        opts: ["做功", "热传递", "摩擦生热", "扩散"] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_01.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，应用于</div>
        `, 
        correct: "照相机", 
        opts: ["照相机", "测量焦距", "投影仪、幻灯机", "放大镜"] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_02.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，应用于</div>
        `, 
        correct: "测量焦距", 
        opts: ["照相机", "测量焦距", "投影仪、幻灯机", "放大镜"] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_03.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，应用于</div>
        `, 
        correct: "投影仪、幻灯机", 
        opts: [
            "照相机", 
            "测量焦距",
            "投影仪、幻灯机",
            "放大镜",
        ] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_04.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，应用于</div>
        `, 
        correct: "探照灯", 
        opts: [
            "测量焦距",
            "投影仪、幻灯机",
            "探照灯",
            "放大镜",
        ] 
    },
    { 
        subject: "physics",
        content: `
            <img src="pic/物理_凸透镜_05.jpg" alt="凸透镜成像规律图">
            <div style="margin-top: 10px; font-size: 24px;">如图，应用于</div>
        `, 
        correct: "放大镜", 
        opts: [
            "照相机", 
            "测量焦距",
            "探照灯",
            "放大镜",
        ] 
    },
    { 
        subject: "physics",
        content: `物距大于2倍焦距, u>2f,成像特点？`, 
        correct: "倒立、缩小的实像，应用于照相机", 
        opts: [
            "倒立、缩小的实像，应用于照相机", 
            "倒立、等大的实像，应用于测量焦距",
            "倒立、放大的实像，应用于投影仪、幻灯机",
            "正立、放大的虚像，应用于放大镜",
        ] 
    },
    { 
        subject: "physics",
        content: `物距等于2倍焦距,u=2f,成像特点？`, 
        correct: "倒立、等大的实像，应用于测量焦距", 
        opts: [
            "倒立、缩小的实像，应用于照相机", 
            "倒立、等大的实像，应用于测量焦距",
            "倒立、放大的实像，应用于投影仪、幻灯机",
            "正立、放大的虚像，应用于放大镜",
        ] 
    },
    { 
        subject: "physics",
        content: `物距小于2倍大于1倍焦距, f < u < 2f, 成像特点？`, 
        correct: "倒立、放大的实像，应用于投影仪、幻灯机", 
        opts: [
            "倒立、缩小的实像，应用于照相机", 
            "倒立、等大的实像，应用于测量焦距",
            "倒立、放大的实像，应用于投影仪、幻灯机",
            "不成像，应用于探照灯",
        ] 
    },
    { 
        subject: "physics",
        content: `物距等于1倍焦距,u=f,成像特点？`, 
        correct: "不成像，应用于探照灯", 
        opts: [
            "倒立、等大的实像，应用于测量焦距",
            "倒立、放大的实像，应用于投影仪、幻灯机",
            "不成像，应用于探照灯",
            "正立、放大的虚像，应用于放大镜",
        ] 
    },
    { 
        subject: "physics",
        content: `物距小于焦距,u<f,成像特点？`, 
        correct: "正立、放大的虚像，应用于放大镜", 
        opts: [
            "倒立、缩小的实像，应用于照相机", 
            "倒立、等大的实像，应用于测量焦距",
            "不成像，应用于探照灯",
            "正立、放大的虚像，应用于放大镜",
        ] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">下列反应属于化合反应的是？</div>`, 
        correct: "C + O₂ = CO₂ (点燃)", 
        opts: [
            "C + O₂ = CO₂ (点燃)", 
            "2H₂O = 2H₂↑ + O₂↑ (通电)",
            "Fe + CuSO₄ = FeSO₄ + Cu",
            "NaOH + HCl = NaCl + H₂O"
        ] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">实验室加热高锰酸钾制氧气属于？</div>`, 
        correct: "分解反应", 
        opts: ["化合反应", "分解反应", "置换反应", "复分解反应"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">湿法炼铜的原理 Fe + CuSO₄ = FeSO₄ + Cu 属于？</div>`, 
        correct: "置换反应", 
        opts: ["化合反应", "分解反应", "置换反应", "复分解反应"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">下列反应属于复分解反应的是？</div>`, 
        correct: "Ca(OH)₂ + Na₂CO₃ = CaCO₃↓ + 2NaOH", 
        opts: [
            "CaO + H₂O = Ca(OH)₂",
            "2KMnO₄ = K₂MnO₄ + MnO₂ + O₂↑",
            "Zn + H₂SO₄ = ZnSO₄ + H₂↑",
            "Ca(OH)₂ + Na₂CO₃ = CaCO₃↓ + 2NaOH"
        ] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">氢气还原氧化铜 H₂ + CuO = Cu + H₂O 属于？</div>`, 
        correct: "置换反应", 
        opts: ["化合反应", "分解反应", "置换反应", "复分解反应"] 
    },
    // --- 新增：四大基本反应类型进阶专项 ---
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">下列反应中，属于置换反应的是？</div>`, 
        correct: "H₂ + CuO = Cu + H₂O (加热)", 
        opts: [
            "3CO + Fe₂O₃ = 2Fe + 3CO₂ (高温)",
            "H₂ + CuO = Cu + H₂O (加热)",
            "CH₄ + 2O₂ = CO₂ + 2H₂O (点燃)",
            "CO₂ + C = 2CO (高温)"
        ] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">工业上煅烧石灰石制取生石灰 CaCO₃ = CaO + CO₂↑ 属于？</div>`, 
        correct: "分解反应", 
        opts: ["化合反应", "分解反应", "置换反应", "复分解反应"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">用小苏打治疗胃酸过多 NaHCO₃ + HCl = NaCl + H₂O + CO₂↑ 属于？</div>`, 
        correct: "复分解反应", 
        opts: ["化合反应", "分解反应", "置换反应", "复分解反应"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">下列反应既不属于化合也不属于分解反应的是？</div>`, 
        correct: "Zn + H₂SO₄ = ZnSO₄ + H₂↑", 
        opts: [
            "S + O₂ = SO₂ (点燃)",
            "2H₂O₂ = 2H₂O + O₂↑",
            "Zn + H₂SO₄ = ZnSO₄ + H₂↑",
            "CaO + H₂O = Ca(OH)₂"
        ] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">铁丝在氧气中燃烧 3Fe + 2O₂ = Fe₃O₄ (点燃) 属于？</div>`, 
        correct: "化合反应", 
        opts: ["化合反应", "分解反应", "置换反应", "复分解反应"] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">在实验室配制溶液时，下列操作不能加快固体溶解速度的是？</div>`, 
        correct: "增加溶剂的质量", 
        opts: [
            "用玻璃棒不断搅拌",
            "将固体研成粉末状",
            "适当升高温度",
            "增加溶剂的质量"
        ] 
    },
    { 
        subject: "chemistry",
        content: `<div style="font-size: 24px;">将大块冰糖放入水中，为了使其快速溶解，最合理的组合措施是？</div>`, 
        correct: "研碎、搅拌并加热", 
        opts: [
            "直接放入冷水中静置",
            "研碎后放入冷水中静置",
            "整块放入热水中搅拌",
            "研碎、搅拌并加热"
        ] 
    }
];