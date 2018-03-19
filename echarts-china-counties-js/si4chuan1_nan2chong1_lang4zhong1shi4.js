(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('阆中市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511381","properties":{"name":"阆中市","cp":[106.005046,31.558356],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AACACA@@CAA@E@C@C@CAAAA@CAA@YCA@GBA@A@@BA@ABABCLAFAF@H@BABC@C@A@E@OCA@CACBA@A@C@A@C@ADAB@BABCBCBE@EBC@EBA@@@AACACAC@A@A@A@@ABABA@AAA@A@AAA@@@AACAAACC@A@C@ABAB@BA@CAAAAAC@@@@BABA@E@A@AA@A@A@C@AACACCAEAA@A@@A@A@A@A@A@CBA@@@A@A@@CEAA@A@A@A@ABA@@AA@A@AB@B@@@BA@@AAAACAC@A@AAAA@AAAA@A@@AAA@@@AA@A@AA@@A@@ABA@@BA@@BB@A@@@@@@AA@@A@A@A@AB@@@DA@ABA@@@A@AACAA@ABA@A@A@CC@@CAA@CBABABA@CBCBAB@BAB@B@@@D@BBDABC@A@CAC@AACCGGAACAABCBABA@ABA@@B@DBBDBBBBDABHLB@BBD@BBB@HBD@B@@D@B@BCBC@E@CAC@A@@@C@@BAB@B@B@B@B@FAB@BABABEFCDC@C@E@AC@C@AAAA@AAACDADCD@@AB@@AAACACC@@A@C@CD@BEDADAB@B@BBB@B@@@@BB@D@B@B@B@B@DABAD@DABCB@@A@A@@@AB@@A@@BA@@@CAA@A@A@AB@@A@C@A@A@A@CAAAAA@@@@A@@BCBABCBABC@CBAB@B@D@B@FB@DBD@D@F@DADBD@BDBD@@AFCDAB@DCDAFCDADCDCBA@CBA@AAA@@CBADCDAB@@AAAA@G@GAE@CAC@CACAA@ABABA@CBADBD@BBD@BADAD@BBDDDFF@BBBBBB@FDNBBB@B@DA@ABIBCDABADKXADEDCD@DBBBBBHBDDD@BBFBBBB@@B@B@B@DABADAD@B@BB@B@@CBAB@@@BB@B@B@HAD@B@BDHL@@@F@DAF@D@BAB@DCDAF@DBB@DBB@D@DCDABEACAAAA@C@@DCDADCDCAAAAECC@CCCE@CDABABEDCBC@C@CAACBABCBA@CAACCCACAC@CAA@EBCDADCDEDCDEBEAE@C@GAMBK@I@E@AD@@AB@DADCDCBC@CAGCAB@DBD@D@BADC@C@C@GB@B@BBF@DCBE@GBCACD@D@BBDBDADE@E@ADBBDB@@BBB@@BBBB@B@B@@ABABABC@ABC@A@C@A@@B@@@BBBB@D@B@B@D@B@DAD@DADAFCBCBABE@CBCBA@@B@B@@BB@D@BBB@D@D@B@BBBBBBB@BBB@B@BBBBDBB@B@B@B@D@BBDBDB@@@BB@B@B@BB@F@B@@@BDB@F@B@B@@@BAB@@ADD@@@B@B@@BBBBBB@B@BABCBAB@B@B@BB@BBF@D@BABAB@B@@BBBBDBD@D@B@BCB@BCBABAB@BBB@DBBBBBD@BABAD@BAD@BBD@@@@BBDBDBB@BD@B@DAD@BABCFADAB@@AD@B@B@F@DBDBDBB@@D@D@D@B@DAB@B@DCB@BABADADADAD@D@B@BBDJDDBDBBBBDBB@DBDDDBBAB@@A@@@A@G@G@ABCHCFIBABC@A@A@ACAAC@@DAD@J@B@HA@@B@BCBC@ABGBA@AB@BCBCFCDABADA@AB@@A@@BC@A@CDABABBB@B@B@B@@A@@AA@A@A@C@ABABA@AB@@AD@B@B@DBDBD@B@D@BA@ABABAB@BAD@BBB@BBBBBB@@D@B@B@@ABA@A@@A@CACAAAAA@C@ADCBAB@BAB@@AAA@AAAA@A@A@@BCBA@AAA@@A@AB@@ADAD@BABAAAAAGA@A@A@@B@B@F@B@B@@A@A@A@C@ABCB@D@DAD@@A@A@AACA@@ABA@@B@B@B@DBB@BAB@@A@E@A@ABAB@BABADAB@BB@BBB@BBB@DAD@BBBBAD@B@D@BBDBDBDBB@D@BB@B@@CBA@CB@@AB@DABCB@BAD@BBBBBB@D@@B@D@DDBB@D@FADEBEDGDEDCHEFCLEJ@FBBB@B@F@D@DDBJJDDBDBB@D@BCFEDEBABAB@DBDBFBBD@F@HAH@F@HBHDFBDBDDJDDBD@BAB@BAB@@ADIBABABAB@D@D@D@B@BBBB@DDBB@BBBAB@B@BADABA@BBBAFADABBB@BD@DBF@DBB@BB@FDFFBBBBAD@B@^FBBD@B@BADBDBDBDBD@D@D@BDDFBDBBD@D@B@H@FAFAF@B@D@D@B@D@D@B@DBB@BBBB@B@BABC@ABCBEBGDCB@B@@BDNDFBFDBBJHVPDBDFBB@B@BADAB@D@@@@@BB@B@B@B@D@B@B@BB@DCF@B@BFF@B@B@@@BBD@BBBBBDBDBDBFBD@BB@@BBBBB@@@BBAD@BADAD@BBD@@AB@BCD@@A@ABAB@@@BBB@BB@ABC@@@@BDBBB@B@@@B@@AACAAAC@AAAB@@ABA@C@A@BDBD@@BDBFBD@BADDBD@BBBB@BCHBF@@BD@DDBBBDBBD@L@@@B@BBB@@BB@@BBBB@@B@BA@A@ACA@CBCBADEBK@A@ABA@ABA@AB@@AD@DBB@HDB@FAB@@ABAAAAA@@@AB@B@BA@A@@DB@BBBBBBBB@BBFDFBBBD@FAB@D@BBB@DBDBDBBBDBBBD@B@B@D@D@B@BAB@BA@A@GAG@ACCACCAAA@AAC@@BC@C@A@CBGDIBADCDAB@DADA@@FABABIBABABAB@D@BBBBDDDBBBBBFBD@D@D@D@DADCBAD@D@BBBB@B@B@DDBDDD@B@@@@@B@@@@AB@@@B@@@@A@@BA@@@AB@@@B@B@@A@@@AB@@@B@@@@ABABA@@@@B@@@@@B@BBB@@@@@B@@@@@BB@@@BAB@BB@@BBDB@BBB@@@@B@B@B@BBB@B@B@BBB@B@B@BB@@B@DAD@BABBBAB@B@D@DADCBBBB@BBF@DBFBBBD@D@@ABABABCBCDABABB@@BB@B@BB@@BB@@AB@@AB@B@B@BB@B@@AB@B@@@@BBBF@@B@@BB@@BB@@B@@@@BBB@@BBB@@B@@@BB@BB@B@@@B@BAB@B@B@B@@@B@@@B@@@B@@BB@BB@@B@@@@@BB@@@@BB@@BBB@@@@B@B@@@@@B@@BB@@@BB@BBBB@@BB@B@@@@@@AB@@@@@B@@@@@@@B@BB@@@@B@@@B@@@B@@@B@@B@@@@@@BB@@BB@@@@@D@BA@@D@BAB@B@B@DBBBD@BBD@FAB@DAD@BABA@A@AAC@@AC@AAABC@E@ADAFAD@BBBBDBBAB@BABABABABA@AAABCBCBA@A@CBA@@@C@A@CAAAA@A@A@@BCDADCBADBFBDBDB@@BBB@@ABB@ADC@C@ABEBABCBAFC@AA@CAAA@@@AB@BAB@@@BCBC@A@EBCBCBAFGHEBADGBABABCDABA@A@AA@G@CBE@EBCAC@EG@CBCFCB@BA@G@AACAAAAAAAABC@EACAAAAAAA@A@CDABABG@ABCBA@EAA@ABAB@D@BA@C@CA@ABE@ABCDC@ABAACAACCAAAA@CAAA@C@@A@A@A@AAAA@GACAAAAC@A@A@@BEB@BADAHAB@BADCBAB@DALCD@B@B@@@FCBAFCDA@@BABA@@AA@@BABA@@AA@@@A@@@A@@@AAC@@BAB@B@B@BAB@B@BA@ABAA@@A@@AA@A@@@A@@@@@A@@A@@A@@@A@@@@@@@@A@@@AAA@@@AAA@@@@@@AB@BA@@@@AAA@A@A@@AA@@AB@A@@A@@A@A@@@@A@A@ADABA@@@@A@C@GBA@@@AA@@@AABGBC@CDEDCBCBA@C@CAA@G@CCCEAGAIACCAC@E@]DMBGB@@C@A@C@AAA@@CAA@AAAA@A@C@C@C@A@AA@AA@A@AA@@@BEBCBE@G@CDCBC@EACCEEEGAA@ABA@AB@@ACEA@@AAAC@ABGDCBA@C@C@IGCCAAAC@ABA@@B@B@@@@A@AAA@@A@A@AEA@A@@@ABA@@@A@@AAA@A@A@@@@@A@@CAACACBA@AD@BA@@B@@@@A@@@AB@@@@AB@@@B@@@@@@A@@A@AA@ABA@@B@B@@@BA@@AA@@@@AA@@@A@@@A@@@A@A@@D@B@BC@ABAF@D@B@B@@A@@@AB@B@D@BB@@B@@A@A@AB@@AB@@@DBB@BBD@B@BAB@BABABAB@@ABA@AA@@A@CBEBA@A@@@A@A@@AAC@A@EDCB@@A@A@AAAE@A@ABC@@BAB@B@D@B@DABAFCHEB@@A@@AA@@B@@AB@@@@@AA@@CAC@ECACECAAAAAA@@@A@A@@@ABAB@B@@AB@AAA@AAC@E@AAAA@ABCBEDGBABA@C@A@A@AB@BAB@B@B@FBB@D@BADADAD@BABAFMBG@C@@@A@C@A@I@A@AAA@CBEBABABABABA@CDCC@A@A@A@A@@BABA@A@AACAA@A@AA@A@A@K@AAAAAAAAAB@@ABA@A@@@@AAA@A@ABA@@@AB@BA@A@@AAC@E@A@E@A@@AAA@@@EAC@@@C@C@CBABCBA@@A@AB@FCBA@A@@@A@AAE@@C@C@A@ABCBCBCBCBCBABA@C@A@CACACCAAAACCECECCCA@CAEDE@GAC@A@A@@BAD@DCBA@GBCBC@A@AACAEGCBED@FDHCDEBEECEAAA@EBE@GCAECAC@E@A@A@@BABAF@FBD@D@D@@ABA@A@EA@@A@@AAA@ACCC@G@C@CBC@E@AACGA@AA@CACAC@@ACC@A@A@ABA@A@@@GGAACCCBA@A@CAGCECA@@@@A@@@@@@A@@@@A@@A@@@@@@@@@CBC@@@ABC@AA"],"encodeOffsets":[[108634,32161]]}}],"UTF8Encoding":true});}));