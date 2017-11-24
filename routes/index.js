var express = require('express');
var router = express.Router();
router.get('/api/header.json', function(req, res, next) {
  res.json(
  {"ret":true,
  "data":{
  	"list":[{
  		"title":"大家说英语",
  		"id":"1",
  		"url":"/list/1"
  	},{
  		"title":"空中英语教室",
  		"id":"2",
  		"url":"/list/2"
  	},{
  		"title":"彭蒙惠英语",
  		"id":"3",
  		"url":"/list/3"
  	},{
  		"title":"科学美国人",
  		"id":"4",
  		"url":"/list/4"
  	},{
  		"title":"各吴相对论",
  		"id":"5",
  		"url":"/list/5"
  	},{
  		"title":"走遍美国",
  		"id":"6",
  		"url":"/list/6"
  	},{
  		"title":"英语名著",
  		"id":"7",
  		"url":"/list/7"
  	},{
  		"title":"托福考试",
  		"id":"8",
  		"url":"/list/8"
  	},{
  		"title":"美国脱口秀",
  		"id":"9",
  		"url":"/list/9"
  	},{
  		"title":"BBC听力资料",
  		"id":"10",
  		"url":"/list/10"
  	},{
  		"title":"外教课堂",
  		"id":"11",
  		"url":"/list/11"
  	}],
    "English": [
      {
        "title": "常速英语",
        "list": [
          {
            "id": 1,
            "title": "音频"
          },{
            "id": 2,
            "title": "视频"
          },{
            "id": 3,
            "title": "翻译"
          }],
        "id": 1
      },{
        "title": "慢速英语",
        "list": [
          {
            "id": 1,
            "title": "科技报道"
          },{
            "id": 2,
            "title": "词汇掌故"
          },{
            "id": 3,
            "title": "美国故事"
          },{
            "id": 4,
            "title": "时事新闻"
          },{
            "id": 5,
            "title": "经济报道"
          },{
            "id": 6,
            "title": "建国史话"
          },{
            "id": 7,
            "title": "教育报道"
          },{
            "id": 8,
            "title": "自然探索"
          },{
            "id": 9,
            "title": "健康报道"
          },{
            "id": 10,
            "title": "美国万花筒"
          },{
            "id": 11,
            "title": "科学动态"
          },{
            "id": 12,
            "title": "农业报道"
          },{
            "id": 13,
            "title": "美国专栏"
          },{
            "id": 14,
            "title": "美国人物"
          }],
        "id": 2
      },{
        "title": "英语教学",
        "list": [
          {
            "id": 1,
            "title": "流行美语"
          },{
            "id": 2,
            "title": "美语三级跳"
          },{
            "id": 3,
            "title": "美国习惯用语"
          },{
            "id": 4,
            "title": "学个词"
          },{
            "id": 5,
            "title": "AS IT IS"
          },{
            "id": 6,
            "title": "体育美语"
          },{
            "id": 7,
            "title": "美语怎么说"
          },{
            "id": 8,
            "title": "商务礼节美语"
          },{
            "id": 9,
            "title": "双语新闻"
          },{
            "id": 10,
            "title": "美语咖啡屋"
          },{
            "id": 11,
            "title": "中级美语"
          },{
            "id": 12,
            "title": "美语训练班"
          },{
            "id": 13,
            "title": "VOA每日一课"
          },{
            "id": 14,
            "title": "OMG美语"
          },{
            "id": 15,
            "title": "VOA相关资料"
          }],
        "id": 3
      }]
  }
})
});


router.get('/api/index.json', function(req, res, next) {
  res.json({
	"ret":true,
	"data":{
		"list":[{
			"id":1,
			"category":" 暖湾",
			"link":"/detail/1",
			"title":"宠物鱼品牌推广～"
		},{
			"id":2,
			"link":"/detail/2",
			"category":"空中英语教室",
			"title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
			"link":"/detail/2"
		},{
			"id":3,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Leonardo da Vinci Painting Sells for Record $450 Million!",
			"link":"/detail/3",
			"time":"(2017-11-17)"
		},{
			"id":4,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Indian Hindus Attacking Muslims, Stealing Their Cows",
			"link":"/detail/4",
			"time":"(2017-03-15)"
		},{
			"id":5,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Japan Seeks to Expand Influence in Southeast Asia",
			"link":"/detail/3",
			"time":"(2017-04-17)"
		},{
			"id":6,
			"link":"/detail/3",
			"category":"VOA常速英语",
			"title":"Clearing Explosive Remnants of War in the West Bank",
			"link":"/detail/3",
			"time":"(2017-08-17)"
		},{
			"id":7,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Japan Seeks to Expand Influence in Southeast Asia",
			"link":"/detail/3",
			"time":"(2017-09-17)"
		},{
			"id":8,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Small Montana City Elects Former Refugee as Mayor",
			"link":"/detail/3",
			"time":"(2017-10-17)"
		},{
			"id":9,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Clearing Explosive Remnants of War in the West Bank",
			"link":"/detail/3",
			"time":"(2017-11-07)"
		},{
			"id":10,
			"link":"/detail/3",
			"category":"VOA常速英语",
			"title":"U.S. Supports Safe Return of Rohingya to Burma",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":11,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Richard Nixon: Resigned",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":12,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"In Lebanon, Musician Helps Voices of Children Rise Above Poverty",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":13,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Saudi Crown Prince Detains Opponents, Expands Power",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":14,
			"link":"/detail/3",
			"category":"VOA常速英语",
			"title":"Researchers Shocked at 'Pain Gap' Between Rich and Poor",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":15,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Vietnam Tech Startups Seek Next Step Forward",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":16,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Lyndon Johnson: Complicated",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":17,
			"link":"/detail/3",
			"category":"VOA常速英语",
			"title":"Saudi Arabia Is First Country to Give Citizenship to Robot",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":18,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Have Scientists Discovered a Radio ‘Space Shield?’",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":19,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Airlines Begin New Security Measures for Flights to US",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":20,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Japan Seeks to Expand Influence in Southeast Asia",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":21,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Richard Nixon: Resigned",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":22,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Have Scientists Discovered a Radio ‘Space Shield?’",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":23,
			"link":"/detail/3",
			"category":"科技报道",
			"title":"5 Reasons to Try Firefox ‘Quantum’ Browser",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":24,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"In Lebanon, Musician Helps Voices of Children Rise Above Poverty",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":25,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Saudi Arabia Is First Country to Give Citizenship to Robot",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":26,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Harry Potter Exhibit Opens at British Library",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":27,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Another American Writer Wins Man Booker Prize",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":28,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"How Powerful Personal Experiences Changed Opinions",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":29,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Lyndon Johnson: Complicated",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":30,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Airlines Begin New Security Measures for Flights to US",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":31,
			"link":"/detail/3",
			"category":"教育报道",
			"title":"Educators Try New Methods to Save American Indian Languages",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		},{
			"id":32,
			"link":"/detail/3",
			"category":"AS IT IS",
			"title":"Researchers Shocked at 'Pain Gap' Between Rich and Poor",
			"link":"/detail/3",
			"time":"(2017-12-17)"
		}],
		"frient":[{
			"id":1,
			"link":"/detail/1",
			"title":"小马过河"
		},{
			"id":2,
			"link":"/detail/2",
			"title":"雅思培训",
			"link":"/detail/2"
		},{
			"id":3,
			"link":"/detail/3",
			"title":"留学机构"
		},{
			"id":4,
			"link":"/detail/3",
			"title":"出国语言培训"
		},{
			"id":5,
			"link":"/detail/3",
			"title":"大学生"
		},{
			"id":6,
			"link":"/detail/3",
			"title":"人人听力网"
		},{
			"id":7,
			"link":"/detail/3",
			"title":"英语口语"
		},{
			"id":8,
			"link":"/detail/3",
			"title":"英语小说网"
		},{
			"id":9,
			"link":"/detail/3",
			"title":"口译"
		},{
			"id":10,
			"link":"/detail/3",
			"title":"美国之音"
		},{
			"id":11,
			"link":"/detail/3",
			"title":"给力英语网"
		},{
			"id":12,
			"link":"/detail/3",
			"title":"中小学教育"
		},{
			"id":13,
			"link":"/detail/3",
			"title":"翻译资格考试"
		},{
			"id":14,
			"link":"/detail/3",
			"title":"GCT"
		},{
			"id":15,
			"link":"/detail/3",
			"title":"英语六级"
		},{
			"id":16,
			"link":"/detail/3",
			"title":"英语学习网站"
		},{
			"id":17,
			"link":"/detail/3",
			"title":"泰语学习网站"
		},{
			"id":18,
			"link":"/detail/3",
			"title":"英蕊幼儿英语"
		},{
			"id":19,
			"link":"/detail/3",
			"title":"手抄报"
		},{
			"id":20,
			"link":"/detail/3",
			"title":"简单学习网"
		},{
			"id":21,
			"link":"/detail/3",
			"title":"哈尔滨英语"
		},{
			"id":22,
			"link":"/detail/3",
			"title":"英语口语培训"
		},{
			"id":23,
			"link":"/detail/3",
			"title":"在线英语培训"
		},{
			"id":24,
			"link":"/detail/3",
			"title":"英语培训"
		},{
			"id":25,
			"link":"/detail/3",
			"title":"韩语学习网"
		},{
			"id":26,
			"link":"/detail/3",
			"title":"职称英语考试"
		},{
			"id":27,
			"link":"/detail/3",
			"title":"家教"
		}]
	}
});
})

router.get('/api/detail.json', function(req, res, next) {
  res.json({
	"ret":true,
	"data":{
		"detail":{
			"title":req.query.id+"Leonardo da Vinci Painting Sells for Record $450 Million",
			"content":"<p>A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.</p><p>The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.</p>"
		}
	}
  })
})
module.exports = router;
