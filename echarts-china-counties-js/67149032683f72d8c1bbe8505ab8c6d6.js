(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('鄢陵县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411024","properties":{"name":"鄢陵县","cp":[114.177399,34.102332],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@CA@@AA@@A@ACA@@A@@AAAA@EACC@@A@@@@A@A@A@@C@@@A@@A@@A@@BA@@@BD@@A@@@AD@@A@A@@@AAABB@@@AB@@A@@BC@@BA@@@G@BFA@BBIBBHSDA@@@@@AAC@@AO@@@@DADAB@D@@AD@@@@A@C@ABC@GDA@A@A@Q@@@A@AB@@GFCD@DB@@F@@@FA@@@AA@AA@@A@@@C@A@@A@A@@@@EABA@CA@B@@@@@B@@@@A@@@A@@AA@@@A@@A@@AA@A@@@BCB@@@BB@@B@@C@A@AA@@@@A@@B@@@@@B@@@@CB@B@@A@A@@@AA@A@@A@@@@@A@AB@@@@A@@@C@@A@@@@@AA@@@@@A@AAA@@@@B@@@B@@BB@@@B@@@B@@@@A@@@@B@@@B@@A@AB@@@@@@@A@@AA@@@@@A@@B@@A@@A@AC@@A@@@@@A@@@ABA@@@A@@C@@AC@@A@A@CA@B@@@@C@@@@FC@@@@@@B@@@@A@@A@BAB@B@@@@A@@B@BA@@@@D@@ABAHA@FBD@BB@@ABB@@@@D@BB@A@B@@@@B@BAJA@A@@BB@B@@BA@@@@@@BA@@B@@C@@BBB@@@@@@AB@@@B@@AB@@C@@@@@@@@A@@@@@AA@A@@@AFCHCFCD@BABEBA@AB@@CDCDADABEB@@BB@@@BC@@@@DC@BAA@@@A@ADA@A@@BA@A@C@CAA@@B@DA@AB@@@BADBD@@@B@@BDBB@@B@F@@@@BB@BB@B@@BDB@@BB@@BB@@@B@@@@@@@P@@B@BB@AHA@@@@BAB@@CA@@@BA@@BA@@@@@AB@B@D@B@@@DB@@B@BE@@@K@@@@DBBF@@D@@AA@JA@@F@@DA@@@B@@A@@BD@@B@DB@@B@B@BB@@BCA@DC@@@@B@@@BADC@@@@D@@@@@DGAAB@BADOA@CE@BKCBADGB@@@BH@BJJB@BAB@@A@@@@BA@@B@BE@@@C@@@C@@@@@GA@BC@@AG@@@@C@B@@ABB@@DC@@BC@@D@@@B@BB@@@@DA@@@BB@@@BA@@@@@@@@@@BC@@DA@@DC@@BA@AFCAA@@AE@@BCA@AC@@@AA@AGD@CCB@B@@ED@@A@@D@@ADB@@F@@@@@@@D@BA@@D@@B@F@@@@B@@H@B@FB@@@BB@B@@@@D@DB@BB@@@BB@D@F@@@@D@@B@B@@@B@B@@@@B@@A@A@AB@@@D@@@@CB@@@BA@@BA@@BA@A@AB@@@B@@A@@B@@BBB@@BDB@@@@@DB@DB@@B@@@DBBA@@B@@B@D@FABA@@@@DAB@B@BAB@@@B@@ADDB@@@@@@@BAB@@A@E@C@A@@@A@A@@@A@AA@@A@@D@@A@@@@@A@A@@@A@@@@DAD@@AD@@@B@@B@@@@H@@@@@F@@@@@@@@B@@AB@BBB@B@@A@@@@@AB@B@B@@B@@@D@@@@A@A@@@AD@B@BBB@B@@@@AB@DA@@@@A@@@@@@ABA@ABA@E@A@@@@@AB@@@B@@@BA@@@@AA@@@@@@@ABAAEB@@A@BDB@BB@@@B@@@@BBB@@@@@HB@@@B@B@@@@A@@@@B@D@BA@@@AB@B@B@BA@A@@B@BC@A@@B@@AD@D@@@BAH@@@BCF@@@@HDD@DBBB@@@B@@@D@@CD@BA@@B@@C@@DCFA@BB@@@@B@DB@@@B@B@@B@B@BBD@BABBB@B@D@B@@@B@@@BAJ@B@@@@B@@J@D@F@D@B@@@B@DA@@@BBB@@B@B@@@@BBD@B@B@B@@B@@B@@@B@@@@@B@H@B@@B@@@@@@B@BA@@@A@@@@@@@@B@@AB@@@@E@AB@BE@@B@@C@E@AB@A@@@AA@A@@@AA@A@@@@AB@B@@G@@@@@@B@@C@@@AB@B@B@B@@BF@@B@@BBB@@B@B@@@@DB@@@@@@B@BB@@@B@@B@B@@B@@@@@@B@D@B@BB@@@@B@@@B@B@@ABA@AB@@@D@@A@C@@D@B@@@@@B@B@BBHD@@A@@B@@@@@@BHA@BB@@@F@DABDD@D@@AB@B@@B@BBDBL@BA@ED@B@FD@BBD@BB@B@BP@@@ACPABDN@AA@A@C@C@@B@HAH@D@B@B@DBB@BB@@@@@B@D@@BD@DBBBBBBBDDBB@DB@@@B@D@BB@AB@@E@A@@DC@AB@BA@@HA@EB@@@HB@@BD@@@@AB@B@BBDBBB@@B@BA@HH@@B@BD@@DB@@FBB@@@EJ@B@@@@@D@@BF@@B@@CB@DC@@FA@@BD@@D@@@A@@@AB@@B@@BA@B@BB@D@@@@C@@BB@@@DBA@DB@@CF@@BB@@@@@@@@BB@BBLA@DH@B@BBB@BDD@DAAEB@@@@@BBDB@@B@B@D@HAJXEB@@@FB@BF@@BF@@@E@@BFFA@D@@D@@@@BBA@@B@@B@@@AD@AAB@BBACB@@CB@@CB@@C@AB@AENA@FF@@@BF@@@BB@@A@@BD@BF@BFDAB@@@HAAAD@@AB@@AH@@@@B@@DJB@@@@@BDB@BD@@@DNA@B@@B@@HB@B@@@BAA@FCB@DAAABA@ADA@AB@F@B@@C@A@AAC@KB@@EB@@A@@B@A@B@@@J@@GDBDC@A@ABAAAB@B@@@BC@@@@BS@@AA@C@@C@@AA@@CA@@DA@@CA@AE@@AEABAEACB@@A@@B@@@@@AC@@@CA@AI@@@@@C@A@E@@BDD@@@@CE@@AB@@AAA@@@@@AF@BAAEB@@AF@@A@@A@AAC@AI@CDC@AAAD@A@B@B@@CA@@AACD@@@D@@AG@@A@@H@@AB@B@BA@GDA@@A@@C@@B@@GD@@@DA@@@AB@AA@@@@CC@@AEA@@@@AA@AEA@AEA@AA@@CG@@A@@@@AEB@A@@@@@AAAC@@@@@@CAE@@AEH@AE@@@C@@@@A@@@@@C@AAC@@@C@@@CB@@@@@@C@A@@@@AA@@@A@AAA@@AAGC@@@@@D@@A@@@@F@@CB@@AJA@AB@@@AG@A@EC@@C@@A@@AA@@AJ@@@@I@@@AB@@C@@@@@A@AJ@@@@CAA@EF@@GA@@A@@@AA@@A@AA@@@@CBA@A@CB@@CB@AFD@DA@CB@@DL@@AB@D@B@@C@ACABCDEBCBAC@@C@B@E@@BE@@@E@EA@@CA@@A@@@GA@BK@@@CD@B@@@F@@A@GFB@A@CB@B@@BH@H@@A@AD@@@@EB@D@AGB@@AA@@EB@@@@AB@@MC@@AG@@G@C@@@ED@@EF@@G@@F@@EA@U@CI@ACG@ADA@A@CBI@CA@@AE@@CF@@AB@@@A@A@@CB@@E@@@GD@@EBOB[BO@G@@BCD@@CB@BC@@@AB@@@@AF@@@D@@@@@@ACGEGAC@@@AD@@CD@@CD@@CC@@G@@@@@@CA@@@@@@@@@@@@BC@AB@CA@CWABSB@N@B@@ABA@@@CB@@@BADBBKFB@A@@@@H@@C@@@AB@@A@AFB@AA@AA@@A@@AA@@@@E@@@C@@BCB@@CB@@CB@@G@@C@A@CAAAA@C@@@@EA@AA@@AACBAEA@@EAC@@DACKBAAG@@AE@@C@E@K@@G"],"encodeOffsets":[[117042,34590]]}}],"UTF8Encoding":true});}));