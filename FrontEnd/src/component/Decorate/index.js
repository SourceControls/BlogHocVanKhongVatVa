export function Decorate({align}) {
    return <></>
    const style = {
        width: '100vw',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        marginTop: '-10%',
        marginBottom: '-40px',
        zIndex: -1,
    }
    return (
        <svg
            style={style}
            width='100%'
            height='100%'
            id='svg'
            viewBox='0 0 1440 390'
            xmlns='http://www.w3.org/2000/svg'
            className='transition duration-300 ease-in-out delay-150'>
            <style
                dangerouslySetInnerHTML={{
                    __html: '\n          .path-0{\n            animation:pathAnim-0 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-0{\n            0%{\n              d: path("M 0,400 C 0,400 0,200 0,200 C 46.13614502404735,244.23608336416328 92.2722900480947,288.47216672832656 152,265 C 211.7277099519053,241.52783327167344 285.0469848316685,150.34741645085705 335,141 C 384.9530151683315,131.65258354914295 411.5397706252313,204.13816746824517 467,231 C 522.4602293747687,257.8618325317548 606.7939326674066,239.09991367616226 662,214 C 717.2060673325934,188.90008632383774 743.2844987051424,157.4621778271057 786,150 C 828.7155012948576,142.5378221728943 888.0680725120236,159.05137501541495 954,183 C 1019.9319274879764,206.94862498458505 1092.4432112467628,238.33232211123445 1142,225 C 1191.5567887532372,211.66767788876555 1218.159082500925,153.6193365396473 1264,142 C 1309.840917499075,130.3806634603527 1374.9204587495374,165.19033173017635 1440,200 C 1440,200 1440,400 1440,400 Z");\n            }\n            25%{\n              d: path("M 0,400 C 0,400 0,200 0,200 C 58.66992230854605,155.04515969909977 117.3398446170921,110.09031939819954 166,128 C 214.6601553829079,145.90968060180046 253.31054384017756,226.6838821063016 312,247 C 370.68945615982244,267.3161178936984 449.4179800221975,227.1741521765939 505,203 C 560.5820199778025,178.8258478234061 593.0175360710322,170.61950918732273 637,185 C 680.9824639289678,199.38049081267727 736.5118756936737,236.34781107411519 797,224 C 857.4881243063263,211.65218892588481 922.934961154273,149.98924651621655 976,149 C 1029.065038845727,148.01075348378345 1069.748279689234,207.69520286101863 1123,215 C 1176.251720310766,222.30479713898137 1242.0719200887902,177.22994203970896 1297,166 C 1351.9280799112098,154.77005796029104 1395.964039955605,177.38502898014553 1440,200 C 1440,200 1440,400 1440,400 Z");\n            }\n            50%{\n              d: path("M 0,400 C 0,400 0,200 0,200 C 46.0999876680232,199.02705635713403 92.1999753360464,198.0541127142681 151,200 C 209.8000246639536,201.9458872857319 281.30008632383766,206.81060550006165 336,227 C 390.69991367616234,247.18939449993835 428.5996793686028,282.70346528548527 472,258 C 515.4003206313972,233.29653471451473 564.3011962017512,148.37553335799726 627,125 C 689.6988037982488,101.62446664200273 766.1955358243928,139.7944012825256 828,154 C 889.8044641756072,168.2055987174744 936.9166605006782,158.44686151190038 977,151 C 1017.0833394993218,143.55313848809962 1050.1378221728942,138.418152669873 1105,161 C 1159.8621778271058,183.581847330127 1236.5320508077446,233.88052780860772 1296,245 C 1355.4679491922554,256.1194721913923 1397.7339745961276,228.05973609569614 1440,200 C 1440,200 1440,400 1440,400 Z");\n            }\n            75%{\n              d: path("M 0,400 C 0,400 0,200 0,200 C 48.80064126279443,222.5645085707239 97.60128252558886,245.12901714144778 155,248 C 212.39871747441114,250.87098285855222 278.395511160439,234.0484400049328 331,224 C 383.604488839561,213.9515599950672 422.81667283265506,210.67722283882108 469,212 C 515.1833271673449,213.32277716117892 568.3377975089406,219.24266863978295 619,204 C 669.6622024910594,188.75733136021705 717.8321371315823,152.35210260204707 770,170 C 822.1678628684177,187.64789739795293 878.3336539647305,259.34892095202866 937,273 C 995.6663460352695,286.65107904797134 1056.8332470094956,242.25221358983842 1111,214 C 1165.1667529905044,185.74778641016158 1212.333357997287,173.6422246886176 1266,174 C 1319.666642002713,174.3577753113824 1379.8333210013566,187.1788876556912 1440,200 C 1440,200 1440,400 1440,400 Z");\n            }\n            100%{\n              d: path("M 0,400 C 0,400 0,200 0,200 C 46.13614502404735,244.23608336416328 92.2722900480947,288.47216672832656 152,265 C 211.7277099519053,241.52783327167344 285.0469848316685,150.34741645085705 335,141 C 384.9530151683315,131.65258354914295 411.5397706252313,204.13816746824517 467,231 C 522.4602293747687,257.8618325317548 606.7939326674066,239.09991367616226 662,214 C 717.2060673325934,188.90008632383774 743.2844987051424,157.4621778271057 786,150 C 828.7155012948576,142.5378221728943 888.0680725120236,159.05137501541495 954,183 C 1019.9319274879764,206.94862498458505 1092.4432112467628,238.33232211123445 1142,225 C 1191.5567887532372,211.66767788876555 1218.159082500925,153.6193365396473 1264,142 C 1309.840917499075,130.3806634603527 1374.9204587495374,165.19033173017635 1440,200 C 1440,200 1440,400 1440,400 Z");\n            }\n          }',
                }}
            />
            <defs>
                <linearGradient id='gradient' x1='37%' y1='2%' x2='63%' y2='98%'>
                    <stop offset='5%' stopColor='var(--primary-color-1)' />
                    <stop offset='95%' stopColor='var(--primary-color-0)' />
                </linearGradient>
            </defs>
            <path
                d='M 0,400 C 0,400 0,200 0,200 C 46.13614502404735,244.23608336416328 92.2722900480947,288.47216672832656 152,265 C 211.7277099519053,241.52783327167344 285.0469848316685,150.34741645085705 335,141 C 384.9530151683315,131.65258354914295 411.5397706252313,204.13816746824517 467,231 C 522.4602293747687,257.8618325317548 606.7939326674066,239.09991367616226 662,214 C 717.2060673325934,188.90008632383774 743.2844987051424,157.4621778271057 786,150 C 828.7155012948576,142.5378221728943 888.0680725120236,159.05137501541495 954,183 C 1019.9319274879764,206.94862498458505 1092.4432112467628,238.33232211123445 1142,225 C 1191.5567887532372,211.66767788876555 1218.159082500925,153.6193365396473 1264,142 C 1309.840917499075,130.3806634603527 1374.9204587495374,165.19033173017635 1440,200 C 1440,200 1440,400 1440,400 Z'
                stroke='none'
                strokeWidth={0}
                fill='url(#gradient)'
                fillOpacity={1}
                className='transition-all duration-300 ease-in-out delay-150 path-0'
            />
        </svg>
    )
}
