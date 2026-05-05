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
            <div style="margin-top: 10px; font-size: 24px;">已知AC是直径,∠BOC=70°, 求∠BAC、∠BDC、∠ABC的度数.</div>
        `, 
        correct: "35°,35°,90°", 
        opts: ["35°,35°,100°", "55°,55°,90°", "35°,35°,100°", "35°,35°,90°"] 
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
            "不成像，应用于探照灯",
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
            "不成像，应用于探照灯",
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
            "正立、放大的虚像，应用于放大镜",
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
            "倒立、缩小的实像，应用于照相机", 
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
            "倒立、放大的实像，应用于投影仪、幻灯机",
            "不成像，应用于探照灯",
            "正立、放大的虚像，应用于放大镜",
        ] 
    },
];