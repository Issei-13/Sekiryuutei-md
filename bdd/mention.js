const a9_0x56042d=a9_0x5c92;function a9_0x4444(){const _0xedc53=['exports','rows','config','4122tCSwal','La\x20table\x20\x27mention\x27\x20a\x20été\x20créée\x20avec\x20succès.','Erreur\x20lors\x20de\x20la\x20modification\x20du\x20status\x20pour\x20l\x27ID\x201\x20dans\x20la\x20table\x20\x27mention\x27:','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27mention\x27:','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','log','release','DATABASE_URL','dotenv','352400DVHYJg','Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20des\x20données\x20dans\x20la\x20table\x20\x27mention\x27:','108895onfuFB','Le\x20status\x20a\x20été\x20modifié\x20avec\x20succès\x20pour\x20l\x27ID\x201\x20dans\x20la\x20table\x20\x27mention\x27.','1270962sRrEzJ','3IiLFab','Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20valeurs\x20de\x20la\x20table\x20\x27mention\x27:','error','2013112nZQlvr','2115DTKCjX','Voici\x20toutes\x20les\x20valeurs\x20de\x20la\x20table\x20\x27mention\x27:','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20UPDATE\x20mention\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SET\x20status\x20=\x20$1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20=\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','query','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20*\x20FROM\x20mention;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','connect','Données\x20ajoutées\x20ou\x20mises\x20à\x20jour\x20dans\x20la\x20table\x20\x27mention\x27\x20avec\x20succès.','629404obaNKt','9880875XgwhNh'];a9_0x4444=function(){return _0xedc53;};return a9_0x4444();}(function(_0xea99ff,_0x3885c6){const _0x6bc60a=a9_0x5c92,_0x381d19=_0xea99ff();while(!![]){try{const _0x30a2b8=parseInt(_0x6bc60a(0xca))/0x1+-parseInt(_0x6bc60a(0xc8))/0x2+-parseInt(_0x6bc60a(0xcd))/0x3*(parseInt(_0x6bc60a(0xba))/0x4)+-parseInt(_0x6bc60a(0xd1))/0x5*(parseInt(_0x6bc60a(0xbf))/0x6)+-parseInt(_0x6bc60a(0xcc))/0x7+-parseInt(_0x6bc60a(0xd0))/0x8+parseInt(_0x6bc60a(0xbb))/0x9;if(_0x30a2b8===_0x3885c6)break;else _0x381d19['push'](_0x381d19['shift']());}catch(_0xd67932){_0x381d19['push'](_0x381d19['shift']());}}}(a9_0x4444,0x247a5),require(a9_0x56042d(0xc7))[a9_0x56042d(0xbe)]());const {Pool}=require('pg'),s=require('../set');var dbUrl=s[a9_0x56042d(0xc6)]?s['DATABASE_URL']:a9_0x56042d(0xc3);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function creerTableMention(){const _0x1466e4=a9_0x56042d,_0x3fd34d=await pool[_0x1466e4(0xd6)]();try{await _0x3fd34d[_0x1466e4(0xd4)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20mention\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20url\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20message\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20'),console[_0x1466e4(0xc4)](_0x1466e4(0xc0));}catch(_0x4e51af){console['error'](_0x1466e4(0xc2),_0x4e51af);}finally{_0x3fd34d[_0x1466e4(0xc5)]();}};creerTableMention();function a9_0x5c92(_0x560ad4,_0x3c6533){const _0x444474=a9_0x4444();return a9_0x5c92=function(_0x5c92ab,_0xd6d9e7){_0x5c92ab=_0x5c92ab-0xba;let _0x22545c=_0x444474[_0x5c92ab];return _0x22545c;},a9_0x5c92(_0x560ad4,_0x3c6533);}async function addOrUpdateDataInMention(_0xaf369d,_0xccb815,_0x2a90bc){const _0x1b4fd0=a9_0x56042d,_0x19eb71=await pool[_0x1b4fd0(0xd6)]();try{const _0x5521eb='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20mention\x20(id,\x20url,\x20type,\x20message)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(1,\x20$1,\x20$2,\x20$3)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20DO\x20UPDATE\x20SET\x20\x20url\x20=\x20excluded.url,\x20type\x20=\x20excluded.type\x20,\x20message\x20=\x20excluded.message;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x4a4727=[_0xaf369d,_0xccb815,_0x2a90bc];await _0x19eb71[_0x1b4fd0(0xd4)](_0x5521eb,_0x4a4727),console['log'](_0x1b4fd0(0xd7));}catch(_0x51b685){console[_0x1b4fd0(0xcf)](_0x1b4fd0(0xc9),_0x51b685);}finally{_0x19eb71['release']();}};async function modifierStatusId1(_0x38cedf){const _0x137e7d=a9_0x56042d,_0x44546e=await pool['connect']();try{const _0x16ac6a=_0x137e7d(0xd3),_0x4c41d3=[_0x38cedf];await _0x44546e[_0x137e7d(0xd4)](_0x16ac6a,_0x4c41d3),console['log'](_0x137e7d(0xcb));}catch(_0x20d979){console[_0x137e7d(0xcf)](_0x137e7d(0xc1),_0x20d979);}finally{_0x44546e[_0x137e7d(0xc5)]();}};async function recupererToutesLesValeurs(){const _0x3163c3=a9_0x56042d,_0x1dd5d2=await pool[_0x3163c3(0xd6)]();try{const _0x18d045=_0x3163c3(0xd5),_0x3e149c=await _0x1dd5d2[_0x3163c3(0xd4)](_0x18d045);return console['log'](_0x3163c3(0xd2),_0x3e149c['rows']),_0x3e149c[_0x3163c3(0xbd)];}catch(_0x269aa5){console[_0x3163c3(0xcf)](_0x3163c3(0xce),_0x269aa5);}finally{_0x1dd5d2['release']();}};module[a9_0x56042d(0xbc)]={'addOrUpdateDataInMention':addOrUpdateDataInMention,'recupererToutesLesValeurs':recupererToutesLesValeurs,'modifierStatusId1':modifierStatusId1};