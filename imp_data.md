var imageCollection = ee.ImageCollection("LANDSAT/LC08/C02/T1_TOA"),
    table = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level2"),
    adminBoundaries = ee.FeatureCollection("FAO/GAUL/2015/level2"),
    urban = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([95.83842683770501, 28.1380780543161]),
            {
              "Landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84203172662103, 28.138248349192892]),
            {
              "Landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84432769753778, 28.136999513810437]),
            {
              "Landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8331482503637, 28.137113044901277]),
            {
              "Landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84074104547663, 28.14085385323913]),
            {
              "Landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([95.83797300577326, 28.141175512777775]),
            {
              "Landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([95.82411275724752, 28.14136463193406]),
            {
              "Landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84222303251607, 28.133568860239503]),
            {
              "Landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84747659345679, 28.12980449053941]),
            {
              "Landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8406820173231, 28.129292733323755]),
            {
              "Landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([95.83666943263682, 28.129727966486826]),
            {
              "Landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([95.83426086492551, 28.13210598359372]),
            {
              "Landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([95.83340255804075, 28.132389824058016]),
            {
              "Landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([95.83168594427121, 28.132862889827752]),
            {
              "Landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85194198675168, 28.131084151697287]),
            {
              "Landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8222569277727, 28.11724487556813]),
            {
              "Landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([95.83832872418994, 28.11646893356431]),
            {
              "Landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([95.82498205213183, 28.11959159282302]),
            {
              "Landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([95.82242858914965, 28.119913316185166]),
            {
              "Landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8564582114632, 28.1572992573364]),
            {
              "Landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85575069780842, 28.157282473166102]),
            {
              "Landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85595096946943, 28.157310850575026]),
            {
              "Landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85379141667448, 28.156978603992208]),
            {
              "Landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85292998465253, 28.155278969555134]),
            {
              "Landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84780872120442, 28.156959638452836]),
            {
              "Landcover": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84699332966389, 28.157073148385734]),
            {
              "Landcover": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8454841400036, 28.157356922980107]),
            {
              "Landcover": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84455240595852, 28.157689610953337]),
            {
              "Landcover": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84380004019384, 28.151480960299537]),
            {
              "Landcover": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([95.842712851364, 28.152603499182504]),
            {
              "Landcover": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84189192712672, 28.149939228924236]),
            {
              "Landcover": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([95.83949582021576, 28.148804048543642]),
            {
              "Landcover": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84476046241835, 28.147489695757837]),
            {
              "Landcover": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84589771904066, 28.14692840040532]),
            {
              "Landcover": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([95.84322266280142, 28.14628511491458]),
            {
              "Landcover": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([95.83937458671645, 28.146146366941974]),
            {
              "Landcover": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([95.83686229282148, 28.144756492549945]),
            {
              "Landcover": 0,
              "system:index": "36"
            })]),
    forest = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([95.8788113649777, 28.126492227115577]),
            {
              "Landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8756785448483, 28.12569742818593]),
            {
              "Landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([95.88627863487515, 28.124789079335688]),
            {
              "Landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([95.88031340202603, 28.12297235854337]),
            {
              "Landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([95.88881064018521, 28.121571948586197]),
            {
              "Landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([95.89190054497037, 28.126113752169815]),
            {
              "Landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([95.88460493644986, 28.128271041459563]),
            {
              "Landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([95.88130045494351, 28.12811965415407]),
            {
              "Landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([95.87993198873949, 28.137259953902017]),
            {
              "Landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([95.87100559582825, 28.14008557243309]),
            {
              "Landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8922343856749, 28.13786545019109]),
            {
              "Landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([95.87415272150895, 28.13534252795089]),
            {
              "Landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([95.89984470846605, 28.13413150343474]),
            {
              "Landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8867412216124, 28.133980124407824]),
            {
              "Landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([95.9016185444408, 28.14124607645104]),
            {
              "Landcover": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([95.87306553366136, 28.133475524567032]),
            {
              "Landcover": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([95.91146045989365, 28.138067283066814]),
            {
              "Landcover": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([95.906482279962, 28.13443426084694]),
            {
              "Landcover": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([95.91168934347581, 28.131204802807986]),
            {
              "Landcover": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([95.92010075094652, 28.13932871722182]),
            {
              "Landcover": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([95.93280369284105, 28.13372782247458]),
            {
              "Landcover": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([95.9194141054387, 28.13312230280263]),
            {
              "Landcover": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([95.91517979322009, 28.14467704762957]),
            {
              "Landcover": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([95.91437870330185, 28.14265884246299]),
            {
              "Landcover": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([95.92827927511914, 28.1341019440692]),
            {
              "Landcover": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([95.94129692866497, 28.13488406662031]),
            {
              "Landcover": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([95.93102585715039, 28.13231061215233]),
            {
              "Landcover": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([95.9100831691621, 28.133950565000553]),
            {
              "Landcover": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([95.91823708456738, 28.136372604435447]),
            {
              "Landcover": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([95.93291413229687, 28.136978105739413]),
            {
              "Landcover": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([95.92627655818157, 28.134303781724796]),
            {
              "Landcover": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([95.92413079096966, 28.13753314636518]),
            {
              "Landcover": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([95.9221852962373, 28.132058308598054]),
            {
              "Landcover": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([95.93468796565227, 28.133874875386006]),
            {
              "Landcover": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([95.80042653974355, 28.184195885518914]),
            {
              "Landcover": 1,
              "system:index": "34"
            })]),
    water = /* color: #0b4a8b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([95.662785021006, 28.111481110769112]),
            {
              "Landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([95.66269919031753, 28.110067931448715]),
            {
              "Landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([95.67122503957931, 28.11256621524368]),
            {
              "Landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([95.66049620351974, 28.106963922036524]),
            {
              "Landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([95.67412200681605, 28.117152547368413]),
            {
              "Landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([95.6644231390182, 28.116445999712347]),
            {
              "Landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([95.66290679641855, 28.116698337705266]),
            {
              "Landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([95.65534691966623, 28.07911206992308]),
            {
              "Landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([95.70541220917863, 28.26765912992541]),
            {
              "Landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([95.70514748692831, 28.26544276516898]),
            {
              "Landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([95.70378626783922, 28.27234572327443]),
            {
              "Landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85289699474905, 28.15942407540456]),
            {
              "Landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85287196085281, 28.15934840379126]),
            {
              "Landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85248929897878, 28.159316873840375]),
            {
              "Landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85259301111526, 28.15930426208834]),
            {
              "Landcover": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85228545109365, 28.15934840379126]),
            {
              "Landcover": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85203153533419, 28.159386239604586]),
            {
              "Landcover": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85184199259109, 28.159446146377906]),
            {
              "Landcover": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85194928095169, 28.159420922325516]),
            {
              "Landcover": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([95.85362297954069, 28.159657395779217]),
            {
              "Landcover": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([95.859686700287, 28.158692404005908]),
            {
              "Landcover": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8616083575552, 28.158926369293066]),
            {
              "Landcover": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([95.86095568674948, 28.15881601427792]),
            {
              "Landcover": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([95.86114344138052, 28.158883803819258]),
            {
              "Landcover": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([95.86210657920441, 28.158653791105596]),
            {
              "Landcover": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8623944695841, 28.158467763717894]),
            {
              "Landcover": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([95.86271878334227, 28.158266960249858]),
            {
              "Landcover": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([95.86289759716746, 28.158184981876413]),
            {
              "Landcover": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([95.8640710607691, 28.158129990371943]),
            {
              "Landcover": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([95.86433570528277, 28.15821827501672]),
            {
              "Landcover": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([95.86460223708856, 28.15808728984621]),
            {
              "Landcover": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.85879447794895, 28.00671459693978],
                  [95.85900547844602, 28.007005083824843],
                  [95.85889103747348, 28.00693561955613]]]),
            {
              "Landcover": 2,
              "system:index": "31"
            })]),
    agriculture = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[95.83574125253509, 28.119149100331413],
                  [95.83610603296111, 28.119754698946],
                  [95.83551237059001, 28.119464516510835]]]),
            {
              "Landcover": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.83363500562412, 28.119869253472903],
                  [95.83367434458053, 28.119730471003745],
                  [95.83381739583713, 28.119799862405166]]]),
            {
              "Landcover": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.83851065964976, 28.121246245125217],
                  [95.8383354222124, 28.1212178581615],
                  [95.83842482896128, 28.121082231501415],
                  [95.83856430383005, 28.121104310087055]]]),
            {
              "Landcover": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.83451501645425, 28.121937971723735],
                  [95.8343898467275, 28.12190800785146],
                  [95.8344059399816, 28.12181023115199],
                  [95.83455256738046, 28.121838617958872]]]),
            {
              "Landcover": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82947439052256, 28.120587457127396],
                  [95.82941448782728, 28.120574052078847],
                  [95.8294448862234, 28.120530682843555]]]),
            {
              "Landcover": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.8338498877943, 28.11246780280324],
                  [95.83372471814941, 28.11236370871146],
                  [95.83388922691442, 28.11231639318178]]]),
            {
              "Landcover": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82647083597855, 28.112830361711485],
                  [95.8264064629622, 28.112764120252315],
                  [95.82651017509868, 28.112754657183388]]]),
            {
              "Landcover": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.8273214683696, 28.112894833253243],
                  [95.8272284852329, 28.112825437527718],
                  [95.8273393498176, 28.112828591833917]]]),
            {
              "Landcover": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82655267051128, 28.089719660663132],
                  [95.82562283717967, 28.0890003105703],
                  [95.82719640067485, 28.08901293059633]]]),
            {
              "Landcover": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.83266095363474, 28.090754506535024],
                  [95.8314021044102, 28.090363285607722],
                  [95.83298997214702, 28.090136124303214]]]),
            {
              "Landcover": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.83585099596935, 28.08728394663358],
                  [95.83472089015818, 28.08686747192909],
                  [95.83557919704295, 28.08629954927394]]]),
            {
              "Landcover": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.83254651315333, 28.088344056773156],
                  [95.83313302242136, 28.088129511903496],
                  [95.83303288749126, 28.08865956410707]]]),
            {
              "Landcover": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.81805543169726, 28.08723346455213],
                  [95.81851319526, 28.087170362783496],
                  [95.81819848262644, 28.087586836313044]]]),
            {
              "Landcover": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82759124093933, 28.08342487632448],
                  [95.82787734345253, 28.083368082373255],
                  [95.8277843599884, 28.08368991436641]]]),
            {
              "Landcover": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82180303595365, 28.07341245682545],
                  [95.82188171386647, 28.072920195406976],
                  [95.82233947775663, 28.073216814948058]]]),
            {
              "Landcover": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82147401809621, 28.074851361039805],
                  [95.82139534018339, 28.074504258813246],
                  [95.82176012060941, 28.074554746300947]]]),
            {
              "Landcover": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82970661206915, 28.07222597735245],
                  [95.82924169540334, 28.07189779969959],
                  [95.82974952741338, 28.071809444250857]]]),
            {
              "Landcover": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82733911536039, 28.073059038710678],
                  [95.82688850424589, 28.072661442050077],
                  [95.82758945465017, 28.072566775961608]]]),
            {
              "Landcover": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82938474698736, 28.07367751957632],
                  [95.82991403666952, 28.073652275629286],
                  [95.8297709850855, 28.074258131031957],
                  [95.82929891629888, 28.073866849712207]]]),
            {
              "Landcover": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82452100753713, 28.074352795629945],
                  [95.82492870330739, 28.074327551552727],
                  [95.82470697446539, 28.074579990324807]]]),
            {
              "Landcover": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.82356256506742, 28.073317791398818],
                  [95.82402032895757, 28.073431389900776],
                  [95.82374853134084, 28.07365858654438]]]),
            {
              "Landcover": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.81076478014118, 28.071305754456734],
                  [95.81045722011957, 28.070826105837224],
                  [95.81091498384602, 28.070939706973984]]]),
            {
              "Landcover": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.81215952882893, 28.071526644266886],
                  [95.8126244450036, 28.07160868920196],
                  [95.81223105445723, 28.071886378442127]]]),
            {
              "Landcover": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.8039287880536, 28.061327107237556],
                  [95.8036569910917, 28.060620189764887],
                  [95.80444377218446, 28.060708554992196]]]),
            {
              "Landcover": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.86447605138171, 28.02046460475038],
                  [95.86398967704379, 28.019997358624767],
                  [95.86491950906573, 28.019997358624767]]]),
            {
              "Landcover": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.85509189523516, 28.022371456580455],
                  [95.85449108041583, 28.02177793728862],
                  [95.85554965912532, 28.02170216858367]]]),
            {
              "Landcover": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[95.84785972143398, 28.007003742745464],
                  [95.84874663876651, 28.007041632275612],
                  [95.84823165463565, 28.007534194954754]]]),
            {
              "Landcover": 3,
              "system:index": "26"
            })]),
    floodplains = /* color: #d6d6d6 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([95.67629593990675, 28.14533430031701]),
            {
              "Landcover": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([95.68110245846144, 28.14798312164064]),
            {
              "Landcover": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([95.67586678646437, 28.142534046540675]),
            {
              "Landcover": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([95.76612414387431, 28.151179723076165]),
            {
              "Landcover": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([95.73333682087626, 28.140130250595913]),
            {
              "Landcover": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([95.67136706379618, 28.159049884878563]),
            {
              "Landcover": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([95.6888765242454, 28.162984748805542]),
            {
              "Landcover": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([95.68578661946025, 28.166919468065423]),
            {
              "Landcover": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([95.76225363007916, 28.167218093232865]),
            {
              "Landcover": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([95.78353964082135, 28.163737397138227]),
            {
              "Landcover": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([95.78740202180279, 28.167899085747973]),
            {
              "Landcover": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([95.77469907990826, 28.158667485079373]),
            {
              "Landcover": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([95.77135168305767, 28.155943254043873]),
            {
              "Landcover": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([95.70228036538461, 28.218942850546494]),
            {
              "Landcover": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([95.7261412967811, 28.228925473628557]),
            {
              "Landcover": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([95.71566995278695, 28.227866754830238]),
            {
              "Landcover": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([95.70056375161508, 28.23558003701255]),
            {
              "Landcover": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([95.72047647134164, 28.22332926960344]),
            {
              "Landcover": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([95.73146279946664, 28.219396626392488]),
            {
              "Landcover": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([95.70073541299203, 28.213951188961158]),
            {
              "Landcover": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([95.70262368813852, 28.206236343943864]),
            {
              "Landcover": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([95.70691522256234, 28.20396716583678]),
            {
              "Landcover": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([95.73198618562782, 28.18566882140242]),
            {
              "Landcover": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([95.73782267244422, 28.182037414555552]),
            {
              "Landcover": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([95.74434580476844, 28.173714975417404]),
            {
              "Landcover": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([95.73232950838172, 28.175682155837997]),
            {
              "Landcover": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([95.73129954012, 28.157976229862623]),
            {
              "Landcover": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([95.72460474641883, 28.15510063205682]),
            {
              "Landcover": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([95.71825327547157, 28.1557060274877]),
            {
              "Landcover": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([95.71585001619422, 28.157824884535465]),
            {
              "Landcover": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([95.66898646028602, 28.169931834470898]),
            {
              "Landcover": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([95.78897776277626, 28.16705655788254]),
            {
              "Landcover": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([95.7968741861161, 28.16796454831029]),
            {
              "Landcover": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([95.581405848541, 28.192026061865374]),
            {
              "Landcover": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([95.58001333173574, 28.187184179398894]),
            {
              "Landcover": 4,
              "system:index": "34"
            })]);
