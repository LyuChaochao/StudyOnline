$(function() {

    //搜索框模块
    $(".search input").focus(function() {
        // console.log($(this).val());
        if ($(this).val() === "输入关键词") {
            $(this).val("");
        }
        $(this).css("color", "#333");
    })
    $(".search input").focusout(function() {
        if ($(this).val() === "") {
            $(this).val("输入关键词");
        }
        $(this).css("color", "#bfbfbf");
    });

    // 读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("username");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data);
        } else {
            return [];
        }
    };
    //渲染加载数据
    function load() {
        data = getDate();
        // console.log(data);
        $.each(data, function(i, n) {
            $(".user").html('<a href="set.html"><img src="images/t01b1ad8b63b90a5581.png">' + n.title + '</a>').show().siblings(".login").hide();
        });
    };
    load();

    // 分类的数据
    var navData = [{
        name: '前端开发',
        cate: ['HTML基础', 'HTML&CSS3', 'JavaScript']
    }, {
        name: '后端开发',
        cate: ['JavaEE', 'SSH框架', 'MVC框架']
    }, {
        name: '移动开发',
        cate: ['Android', 'IOS', 'HarmonyOS']
    }, {
        name: '人工智能',
        cate: ['Python', '深度学习基础', 'AI游戏实战']
    }, {
        name: '商业预测',
        cate: ['数理统计', '数据类型研究', '预测流程管理']
    }, {
        name: '云计算&大数据',
        cate: ['Flink入门', '7天精通kettle', '狂野大数据']
    }, {
        name: '运维&测试',
        cate: ['JMeter接口测试', '基于Selenium实战', '狂野Testing']
    }, {
        name: 'UI设计',
        cate: ['PS精通', '零基础UI手绘', 'AE软件']
    }, {
        name: '产品',
        cate: ['BI数据系统', '在线CRM系统', '广告投放']
    }]

    // 课程的数据
    var data = [{
            firstname: '前端开发',
            secondname: 'HTML基础',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练1 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '前端开发',
            secondname: 'HTML&CSS3',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练2 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '后端开发',
            secondname: 'JavaEE',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练3 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '后端开发',
            secondname: 'MVC框架',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练4 ',
            spanCon: '1125人在学习',
            emCon: '高级'
        },
        {
            firstname: '商业预测',
            secondname: '预测流程管理',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练5 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '移动开发',
            secondname: 'HarmonyOS',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练6 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '移动开发',
            secondname: 'IOS',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练7 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '产品',
            secondname: '广告投放',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练8 ',
            spanCon: '1125人在学习',
            emCon: '中级'
        },
        {
            firstname: '运维&测试',
            secondname: 'JMeter接口测试',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练9 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '运维&测试',
            secondname: '狂野Testing',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练10 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '人工智能',
            secondname: '深度学习基础',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练11 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '前端开发',
            secondname: 'JavaScript',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练12 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '云计算&大数据',
            secondname: '狂野大数据',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练13 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: 'UI设计',
            secondname: 'PS精通',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练14 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '商业预测',
            secondname: '数据类型研究',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练15 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '人工智能',
            secondname: 'Python',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练16 ',
            spanCon: '1125人在学习',
            emCon: '高级'
        },
        {
            firstname: '产品',
            secondname: '在线CRM系统',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练17 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '后端开发',
            secondname: 'SSH框架',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练18 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '移动开发',
            secondname: 'Android',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练19 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练20 ',
            spanCon: '1125人在学习',
            emCon: '中级'
        },
        {
            firstname: '后端开发',
            secondname: 'SSH框架',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练22 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '前端开发',
            secondname: 'JavaScript',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练21 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '后端开发',
            secondname: 'SSH框架',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练26 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },

        {
            firstname: '后端开发',
            secondname: 'JavaEE',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练23 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '前端开发',
            secondname: 'JavaScript',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练25 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '前端开发',
            secondname: 'HTML&CSS3',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练24 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },


        {
            firstname: '前端开发',
            secondname: 'HTML&CSS3',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练28 ',
            spanCon: '1125人在学习',
            emCon: '高级'
        },
        {
            firstname: '后端开发',
            secondname: 'MVC框架',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练27 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '人工智能',
            secondname: 'Python',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练33 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },

        {
            firstname: '后端开发',
            secondname: 'MVC框架',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练29 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练31 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '运维&测试',
            secondname: '基于Selenium实战',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练39 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练30 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '商业预测',
            secondname: '数据类型研究',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练35 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练32 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },

        {
            firstname: '产品',
            secondname: '广告投放',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练34 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },

        {
            firstname: '移动开发',
            secondname: 'Android',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练36 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '移动开发',
            secondname: 'IOS',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练37 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '运维&测试',
            secondname: '狂野Testing',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练40 ',
            spanCon: '1125人在学习',
            emCon: '高级'
        },
        {
            firstname: '运维&测试',
            secondname: 'JMeter接口测试',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练38 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '产品',
            secondname: 'BI数据系统',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练42 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },

        {
            firstname: '产品',
            secondname: '在线CRM系统',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练41 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },

        {
            firstname: 'UI设计',
            secondname: 'PS精通',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练43 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: 'UI设计',
            secondname: '零基础UI手绘',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练44 ',
            spanCon: '1125人在学习',
            emCon: '中级'
        },
        {
            firstname: '人工智能',
            secondname: 'Python',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练45 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '人工智能',
            secondname: '深度学习基础',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练46 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '人工智能',
            secondname: 'AI游戏实战',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练47 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '商业预测',
            secondname: '数理统计',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练48 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '商业预测',
            secondname: '数据类型研究',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练49 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '商业预测',
            secondname: '预测流程管理',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练50 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '后端开发',
            secondname: 'JavaEE',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练51 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '后端开发',
            secondname: 'MVC框架',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练52 ',
            spanCon: '1125人在学习',
            emCon: '高级'
        },

        {
            firstname: '产品',
            secondname: '在线CRM系统',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练41 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '人工智能',
            secondname: 'Python',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练45 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '人工智能',
            secondname: 'AI游戏实战',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练47 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        }, {
            firstname: '前端开发',
            secondname: 'JavaScript',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练25 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '前端开发',
            secondname: 'HTML&CSS3',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练24 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练31 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '运维&测试',
            secondname: '基于Selenium实战',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练39 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练30 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        }, {
            firstname: '前端开发',
            secondname: 'HTML&CSS3',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练28 ',
            spanCon: '1125人在学习',
            emCon: '高级'
        },
        {
            firstname: '后端开发',
            secondname: 'MVC框架',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练27 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '人工智能',
            secondname: 'Python',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练33 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },

        {
            firstname: '后端开发',
            secondname: 'MVC框架',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练29 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练31 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '运维&测试',
            secondname: '基于Selenium实战',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练39 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        }, {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练31 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '运维&测试',
            secondname: '基于Selenium实战',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练39 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练30 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '商业预测',
            secondname: '数据类型研究',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练35 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '云计算&大数据',
            secondname: 'Flink入门',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练32 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },

        {
            firstname: '产品',
            secondname: '广告投放',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练34 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },

        {
            firstname: '移动开发',
            secondname: 'Android',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练36 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '移动开发',
            secondname: 'IOS',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练37 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '运维&测试',
            secondname: '狂野Testing',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练40 ',
            spanCon: '1125人在学习',
            emCon: '高级'
        },
        {
            firstname: '运维&测试',
            secondname: 'JMeter接口测试',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练38 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '产品',
            secondname: 'BI数据系统',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练42 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        }, {
            firstname: '产品',
            secondname: '广告投放',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练34 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },

        {
            firstname: '移动开发',
            secondname: 'Android',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练36 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: '移动开发',
            secondname: 'IOS',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练37 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },
        {
            firstname: '运维&测试',
            secondname: '狂野Testing',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练40 ',
            spanCon: '1125人在学习',
            emCon: '高级'
        },
        {
            firstname: '运维&测试',
            secondname: 'JMeter接口测试',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练38 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },
        {
            firstname: '产品',
            secondname: 'BI数据系统',
            imgSrc: 'images/精品推荐02.png',
            p: 'Think PHP 5.0 博客系统实战项目演练42 ',
            spanCon: '1125人在学习',
            emCon: '中级',
            change: 'new'
        },

        {
            firstname: '产品',
            secondname: '在线CRM系统',
            imgSrc: 'images/精品推荐01.png',
            p: 'Think PHP 5.0 博客系统实战项目演练41 ',
            spanCon: '1125人在学习',
            emCon: '高级',
            change: 'hot'
        },

        {
            firstname: 'UI设计',
            secondname: 'PS精通',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练43 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
        {
            firstname: 'UI设计',
            secondname: '零基础UI手绘',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练44 ',
            spanCon: '1125人在学习',
            emCon: '中级'
        }, {
            firstname: '云计算&大数据',
            secondname: '7天精通kettle',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练31 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        }, {
            firstname: 'UI设计',
            secondname: 'AE软件',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练44 ',
            spanCon: '1125人在学习',
            emCon: '中级'
        }, {
            firstname: 'UI设计',
            secondname: 'AE软件',
            imgSrc: 'images/精品推荐03.png',
            p: 'Think PHP 5.0 博客系统实战项目演练43 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        }, {
            firstname: '云计算&大数据',
            secondname: '7天精通kettle',
            imgSrc: 'images/精品推荐04.png',
            p: 'Think PHP 5.0 博客系统实战项目演练32 ',
            spanCon: '1125人在学习',
            emCon: '初级'
        },
    ]

    // 定义'全部'的字符串
    var allStr = '<li><a href="javascript:;">全部</a></li>';

    // 渲染一级分类
    //第一次渲染,把所有数据渲染进一级分类里
    var updateCate1 = function() {
        var arr = [allStr];
        $.each(navData, function(index, ele) {
            var cateStr = `<li><a href="javascript:;">${ele.name}</a></li>`;
            arr.push(cateStr);
        })
        return arr.join('');
    }
    $('.firstCate ul')[0].innerHTML = updateCate1();

    // 渲染二级分类
    // 第一次渲染,把所有数据渲染进二级分类
    var updateCate2 = function(d) {
        var arr = [allStr];
        $.each(d, function(index, ele) {
            var cateStr = `<li><a href="javascript:;">${ele.cate[0]}</a></li><li><a href="javascript:;">${ele.cate[1]}</a></li><li><a href="javascript:;">${ele.cate[2]}</a></li>`;
            arr.push(cateStr);
        })
        return arr.join('');
    }
    $('.secondCate ul')[0].innerHTML = updateCate2(navData);


    var page;
    var currpage;
    // 渲染分页
    var updatePage = function(d) {
            var laypage = layui.laypage,
                layer = layui.layer;

            laypage.render({
                elem: 'page',
                count: d.length,
                limit: 20,
                jump: function(obj) {

                    // console.log(obj.curr);
                    // 点击分页获得当前分页的所有页数和当前页的数字
                    page = Math.ceil(d.length / 20);
                    currpage = obj.curr;


                    //渲染当前的课程列表页面
                    $('#fenye')[0].innerHTML = function() {
                        var arr = [],
                            thisData = d.concat().splice(obj.curr * obj.limit - obj.limit, obj.limit);
                        layui.each(thisData, function(index, item) {
                            var fenyeStr = '<li><img src=' + item.imgSrc + ' alt=""><p>' + item.p + '</p><span><em>' + item.emCon + '</em>&nbsp;&nbsp;•&nbsp;&nbsp;' + item.spanCon + '</span><div class=' + item.change + '></div></li>';
                            arr.push(fenyeStr);
                        });
                        return arr.join('');
                    }();

                    // 点击分页后跳转到页面顶部
                    $("body, html").stop().animate({
                        scrollTop: 0
                    }, 200);

                    // 将当前页的页数和页渲染到右上角的箭头里
                    if (page == 0) {
                        currpage = page;
                    }
                    $('#em1').text(currpage);
                    $('#em2').text(page);

                    // 设置小分页的颜色
                    if ($('#em1').text() == 1) {
                        $('#prevspan').css('color', '#666')

                    } else if ($('#em1').text() == page) {
                        $('#nextspan').css('color', '#666')
                    } else {
                        $('#prevspan').css('color', '#00A4FF')
                        $('#nextspan').css('color', '#00A4FF')
                    }

                }
            });

        }
        // 调用渲染分页
    layui.use(['laypage', 'layer'], updatePage(data))

    // 点击小分页实现课程列表页面的跳转
    $('#prevspan').click(function() {
        $('.layui-laypage-prev')[0].click();
    })

    $('#nextspan').click(function() {
        $('.layui-laypage-next')[0].click();
    })

    // 点击更新页面
    // 点击第二分类更新页面
    var secondCateClickName;
    var updateSecondCate = function(e) {
        $(e.currentTarget).addClass('current');
        $(e.currentTarget).parent().siblings().children().removeClass('current');

        // 获得当前点击的课程名字
        secondCateClickName = $(e.currentTarget).text();

        // 如果点击的是'全部'标签,则更新第一分类点击的数据下的所有第二分类的数据
        if (secondCateClickName == '全部') {
            var dataAll = data.filter(function(value) {
                return value.firstname == firstCateClickName
            })
            layui.use(['laypage', 'layer'], updatePage(dataAll))
            return;
        }

        // 点击了第二分类的其他课程,则渲染响应的课程列表页面
        var dataNew = data.filter(function(value) {
            return value.secondname == secondCateClickName
        })
        layui.use(['laypage', 'layer'], updatePage(dataNew))

        // 更新等级分类
        $('.levelCate ul')[0].innerHTML = '<li><a href="javascript:;">全部</a></li><li><a href="javascript:;">初级</a></li><li><a href="javascript:;">中级</a></li><li><a href="javascript:;">高级</a></li>'

        // 在点击第二分类下点击等级分类对课程列表进行分类
        $('.levelCate ul li').on('click', 'a', function() {
            $(this).addClass('current');
            $(this).parent().siblings().children().removeClass('current');

            // 获得当前点击等级分类的内容
            var clickLevelName = $(this).text();

            // 渲染相应的课程列表页面
            var dataLevel = data.filter(function(value) {
                return value.emCon == clickLevelName && value.secondname == secondCateClickName;
            })
            layui.use(['laypage', 'layer'], updatePage(dataLevel))
        });

        // 在点击第二分类下点击最新、热评、推荐的标签对课程列表进行分类
        $('#new').on('click', function() {
            $(this).addClass('current');
            $(this).parent().siblings().children().removeClass('current');
            var datanew = dataNew.filter(function(value) {
                return value.change == 'new'
            })
            layui.use(['laypage', 'layer'], updatePage(datanew))
        })

        $('#hot').on('click', function() {
            $(this).addClass('current');
            $(this).parent().siblings().children().removeClass('current');
            var dataHot = dataNew.filter(function(value) {
                return value.change == 'hot'
            })
            layui.use(['laypage', 'layer'], updatePage(dataHot))
        })

        $('#rec').on('click', function() {
            $(this).addClass('current');
            $(this).parent().siblings().children().removeClass('current');
            layui.use(['laypage', 'layer'], updatePage(dataNew))
        })

    }

    // 等级分类的更新函数
    var updateLevelCate = function(e) {
        $(e.currentTarget).addClass('current');
        $(e.currentTarget).parent().siblings().children().removeClass('current');

        // 获得当前点击的等级的内容
        var clickName = $(e.currentTarget).text();

        var dataLevel = data.filter(function(value) {
            return value.emCon == clickName
        })
        layui.use(['laypage', 'layer'], updatePage(dataLevel))
    }

    // 点击第一分类更新相应的课程列表
    var firstCateClickName;
    $('.firstCate ul li').on('click', 'a', function() {
        $(this).addClass('current');
        $(this).parent().siblings().children().removeClass('current');

        $('.secondCate').css('height', '60px')
        $('.courseNav').css('height', '180px')

        firstCateClickName = $(this).text();

        // 如果点击的'全部'标签，则渲染所有的课程列表页面
        if (firstCateClickName == '全部') {
            $('.secondCate ul')[0].innerHTML = updateCate2(navData);
            layui.use(['laypage', 'layer'], updatePage(data));
            // 点击'更多'标签，显示隐藏的内容
            $('#more').show();
            return;
        }

        // 更新点击第一分类更新相应的课程列表页面
        var dataNew = data.filter(function(value) {
            return value.firstname == firstCateClickName
        })
        layui.use(['laypage', 'layer'], updatePage(dataNew))

        // 点击第一分类里点击第二分类内容更新相应的课程列表页面
        var datadata = navData.filter(function(value) {
            return value.name == firstCateClickName
        })
        $('.secondCate ul')[0].innerHTML = updateCate2(datadata);
        $('.secondCate ul li').on('click', 'a', updateSecondCate);

        // 点击第一分类里点击等级分类更新相应的课程列表页面
        $('.levelCate ul')[0].innerHTML = '<li><a href="javascript:;">全部</a></li><li><a href="javascript:;">初级</a></li><li><a href="javascript:;">中级</a></li><li><a href="javascript:;">高级</a></li>'
        $('.levelCate ul li').on('click', 'a', function() {
            $(this).addClass('current');
            $(this).parent().siblings().children().removeClass('current');

            var clickLevelName = $(this).text();
            var dataLevel = data.filter(function(value) {
                return value.emCon == clickLevelName && value.firstname == firstCateClickName;
            })
            layui.use(['laypage', 'layer'], updatePage(dataLevel))
        });

        // 在点击第一分类下点击最新、热评、推荐的标签对课程列表进行分类
        $('#new').on('click', function() {
            $(this).addClass('current');
            $(this).parent().siblings().children().removeClass('current');
            var datanew = dataNew.filter(function(value) {
                return value.change == 'new'
            })
            layui.use(['laypage', 'layer'], updatePage(datanew))
        })

        $('#hot').on('click', function() {
            $(this).addClass('current');
            $(this).parent().siblings().children().removeClass('current');
            var dataHot = dataNew.filter(function(value) {
                return value.change == 'hot'
            })
            layui.use(['laypage', 'layer'], updatePage(dataHot))
        })

        $('#rec').on('click', function() {
            $(this).addClass('current');
            $(this).parent().siblings().children().removeClass('current');
            layui.use(['laypage', 'layer'], updatePage(dataNew))
        })

        // 点击'收起'标签，隐藏多余的内容
        $('#more').hide();
    });

    // 给第二分类绑定点击事件
    $('.secondCate ul li').on('click', 'a', updateSecondCate);
    // 给等级分类绑定点击事件
    $('.levelCate ul li').on('click', 'a', updateLevelCate);

    // 获取首页导航点击的参数，对其进行对应的数据页面显示
    var ur = location.href;
    if (ur.indexOf('?') != -1) {
        var type = ur.split('?')[1].split('&')[0].split('=')[1];
        var cate = ur.split('?')[1].split('&')[1].split('=')[1];
        $('.firstCate ul li').eq(type).children()[0].click()
        $('.secondCate ul li').eq(cate).children()[0].click()
    }

    // 定义点击'更多'标签的动态效果
    var cateheight;
    var navheight;
    $('#more').click(function() {
        cateheight = $('.secondCate').css('height');
        navheight = $('.courseNav').css('height');
        if (cateheight == '60px' && navheight == '180px') {
            $('.secondCate').animate({
                    height: 120
                }, 500),
                $('.courseNav').animate({
                    height: 240
                }, 500)
            $('.secondCate').css('height', '120px')
            $('.courseNav').css('height', '240px')
            $(this).html('收起<em></em>');
        } else if (cateheight == '120px' && navheight == '240px') {
            $('.secondCate').animate({
                    height: 60
                }, 500),
                $('.courseNav').animate({
                    height: 180
                }, 500)
            $('.secondCate').css('height', '60px')
            $('.courseNav').css('height', '180px')
            $(this).html('更多<em></em>');
        }
    })

    // 当前页面点击推荐、最新、热评三个标签的点击事件
    $('#new').on('click', function() {
        $(this).addClass('current');
        $(this).parent().siblings().children().removeClass('current');
        var dataNewnew = data.filter(function(value) {
            return value.change == 'new'
        })
        layui.use(['laypage', 'layer'], updatePage(dataNewnew))
    })

    $('#hot').on('click', function() {
        $(this).addClass('current');
        $(this).parent().siblings().children().removeClass('current');
        var dataHothot = data.filter(function(value) {
            return value.change == 'hot'
        })
        layui.use(['laypage', 'layer'], updatePage(dataHothot))
    })

    $('#rec').on('click', function() {
        $(this).addClass('current');
        $(this).parent().siblings().children().removeClass('current');
        layui.use(['laypage', 'layer'], updatePage(data))
    })




})