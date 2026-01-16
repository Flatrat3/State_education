
const questions = [
    {
        id: 1,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən dövlətin ali məqsədlərinə aiddir:\n1. dövlətin tərəfdar çıxdığı beynəlxalq müqavilələrə riayət olunmasının təmin edilməsi\n2. insan və vətəndaş hüquqlarının və azadlıqlarının təmin edilməsi\n3. ölkə vətəndaşlarına layiqli həyat səviyyəsinin təmin edilməsi\n4. iqtisadi inkişafa və tərəqqiyə nail olmaq",
        options: {
            A: "2, 3",
            B: "1, 2",
            C: "1, 4",
            D: "3, 4"
        },
        answer: "A"
    },
    {
        id: 2,
        question: "“Dövlət qulluqçularının etik davranış qaydaları haqqında” Azərbaycan Respublikasının Qanununa əsasən dövlət qulluqçusu birbaşa və ya yuxarı rəhbəri tərəfindən ona verilən əmrin, sərəncamın və ya tapşırığın qanuna və ya digər normativ hüquqi akta zidd olmasına əmindirsə, necə hərəkət etməlidir?",
        options: {
            A: "istənilən halda ona rəhbərlik tərəfindən verilən əmri, sərəncamı və ya tapşırığı yerinə yetirməlidir",
            B: "yuxarı rəhbərindən həmin göstərişin və ya əmrin yazılı şəkildə ona verilməsini tələb etməlidir",
            C: "bu barədə yazılı əsaslandırmanı birbaşa və ya yuxarı rəhbərinə təqdim etməlidir",
            D: "həmin əmr, sərəncam və ya tapşırığın yerinə yetirilməsindən imtina etməlidir"
        },
        answer: "C"
    },
    {
        id: 3,
        question: "“Dövlət qulluqçularının etik davranış qaydaları haqqında” Qanuna əsasən etik davranış qaydalarına əməl olunmasına nəzarət edən dövlət orqanının rəhbərinin vəzifələrinə aid deyil:",
        options: {
            A: "tabeliyində olan dövlət qulluqçuları arasında onların tutduqları vəzifələrə uyğun olaraq vəzifə bölgüsü aparmaq",
            B: "etik davranış qaydalarının pozulmasının qarşısının alınması və profilaktikası üzrə tədbirlər görmək",
            C: "öz səlahiyyətləri çərçivəsində bu qanunla müəyyən olunmuş etik davranış qaydalarını və onlara əməl olunması ilə bağlı təminatları konkretləşdirən normativ hüquqi aktları işləyib hazırlamalı və təsdiq etmək",
            D: "dövlət qulluqçularının etik davranış məsələləri üzrə ictimai rəyin öyrənilməsi və bununla bağlı maarifləndirmənin həyata keçirilməsi üçün tədbirlər görmək"
        },
        answer: "D"
    },
    {
        id: 4,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən Azərbaycan Respublikası vətəndaşlarının əsas vəzifələrinə aiddir:",
        options: {
            A: "tətil etmək",
            B: "ətraf mühiti qorumaq",
            C: "mədəniyyət təsisatlarından və mədəni sərvətlərdən istifadə etmək",
            D: "sərbəst toplaşmaq"
        },
        answer: "B"
    },
    {
        id: 5,
        question: "“Dövlət qulluğu haqqında” Azərbaycan Respublikasının Qanununa əsasən dövlət qulluqçusunun əsas hüquqlarına aid deyil:",
        options: {
            A: "ictimai birliklərdən lazımi informasiya və materiallar tələb etmək və almaq",
            B: "sərbəst qaydada pedaqoji və başqa ödənişli fəaliyyətlə məşğul olmaq",
            C: "qiymətli kağızlardan, rentadan və icarədən gəlir götürmək",
            D: "vəzifə maaşına əlavələr və mükafatlar almaq"
        },
        answer: "B"
    },
    {
        id: 6,
        question: "Sənədlər blanksız tərtib edilir:",
        options: {
            A: "heç bir halda",
            B: "sənədlər iki və ya daha artıq təşkilat adından hazırlanarsa",
            C: "rəhbərin göstərişi ilə",
            D: "təşkilatların qarşılıqlı razılığı ilə"
        },
        answer: "B"
    },
    {
        id: 7,
        question: "“Dövlət qulluğu haqqında” Azərbaycan Respublikasının Qanununa əsasən dövlət qulluqçusu dövlət qulluğunda irəli çəkilə bilər:",
        options: {
            A: "yalnız müsahibə yolu ilə",
            B: "qulluqda yüksəliş, müsahibə və ya müsabiqə yolu ilə",
            C: "yalnız müsabiqə və müsahibə yolu ilə",
            D: "yalnız qulluqda yüksəliş yolu ilə"
        },
        answer: "B"
    },
    {
        id: 8,
        question: "“Dövlət hakimiyyəti orqanlarında, idarə, təşkilat və müəssisələrində kargüzarlığın aparılmasına dair Təlimat”a əsasən aktın hazırlanması və tərtib edilməsi ilə bağlı düzgün deyil:",
        options: {
            A: "Aktın mətni giriş və şərh hissələrindən ibarət olmalıdır",
            B: "Şərh hissəsində akt tərtib edilməsinin məqsəd və vəzifələri, aparılmış işin mahiyyəti və xarakteri, müəyyən edilmiş faktlar, habelə nəticələr və təkliflər ifadə olunur.",
            C: "Aktın mətninin sonunda (imzalardan qabaq) qəbul edilən qərarlar göstərilməlidir",
            D: "Giriş hissəsində aktın tərtib edilməsinin əsası göstərilir"
        },
        answer: "B"
    },
    {
        id: 9,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən Naxçıvan Muxtar Respublikasında yerli icra hakimiyyətlərinin başçıları hansı qaydada vəzifəyə təyin edilir?",
        options: {
            A: "Naxçıvan Muxtar Respublikası Ali Məclisinin sədri təyin edir",
            B: "Azərbaycan Respublikasının Prezidentinin razılığı ilə NMR Ali Məclisinin sədri təyin edir",
            C: "NMR Ali Məclisi sədrinin təqdimatı ilə AR Prezidenti təyin edir",
            D: "təqdimat olmadan AR Prezidenti birbaşa təyin edir"
        },
        answer: "C"
    },
    {
        id: 10,
        question: "“Dövlət qulluğu haqqında” Qanuna əsasən dövlət orqanlarında inzibati vəzifələrin altıncı təsnifatına uyğun olan vəzifələrin tutulması həyata keçirilir:",
        options: {
            A: "qulluqda yüksəliş yolu ilə",
            B: "yalnız daxili müsahibə yolu ilə",
            C: "müsabiqə və qulluqda yüksəliş yolu ilə",
            D: "müsabiqə və müsahibə yolu ilə"
        },
        answer: "D"
    },
    {
        id: 11,
        question: "“Dövlət qulluğu haqqında” Azərbaycan Respublikasının Qanununa əsasən dövlət orqanları kateqoriyalar üzrə təsnifləşdirilərkən nəzərə alınmır:",
        options: {
            A: "funksiyası",
            B: "yurisdiksiyası",
            C: "statusu",
            D: "iyerarxiyası"
        },
        answer: "A"
    },
    {
        id: 12,
        question: "“Dövlət hakimiyyəti orqanlarında, idarə, təşkilat və müəssisələrində kargüzarlığın aparılmasına dair Təlimat”a əsasən rəsmi sənədlərin səhifələri necə nömrələnməlidir?",
        options: {
            A: "İki və daha artıq səhifəsi olan sənədlər ikinci səhifədən başlayaraq ərəb rəqəmləri ilə nömrələnməlidir.",
            B: "On və daha artıq səhifəsi olan sənədlər ikinci səhifədən başlayaraq rum rəqəmləri ilə nömrələnməlidir.",
            C: "İyirmi və daha artıq səhifəsi olan sənədlər ərəb rəqəmləri ilə, digər sənədlər isə birinci səhifədən başlayaraq ərəb və ya rum rəqəmləri ilə nömrələnməlidir.",
            D: "rəsmi sənədlərin səhifələrinin nömrələnməsinə yol verilmir"
        },
        answer: "B"
    },
    {
        id: 13,
        question: "Dövlət qulluqçusunun vəzifələrinə aiddir:\n" +
            "1. Qanunvericiliyi və dövlət orqanlarının qəbul etdikləri başqa normativ hüquqi aktları həyata keçirmək\n" +
            "2. Dövlət məvacibi almaq\n" +
            "3. Rəhbərlərin öz səlahiyyəti hüdudunda verdikləri əmrləri, sərəncamları və göstərişləri yerinə yetirmək\n" +
            "4. Dövlət orqanında müəyyən edilmiş qulluq reqlamentinə riayət etmək\n" +
            "5. Əmanətlərdən (depozitlərdən), qiymətli kağızlardan, rentadan və icarədən gəlir götürmək",
        options: {
            A: "1, 3, 4",
            B: "1, 2, 3",
            C: "3, 4, 5",
            D: "1, 2, 5"
        },
        answer: "B"
    },
    {
        id: 14,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən qanunvericilik, icra və məhkəmə hakimiyyətləri arasında səlahiyyət bölgüsü ilə bağlı mübahisəli məsələləri kim həll edir?",
        options: {
            A: "Azərbaycan Respublikasının Konstitusiya Məhkəməsi",
            B: "Azərbaycan Respublikasının Prezidenti",
            C: "Azərbaycan Respublikasının Milli Məclisi",
            D: "Azərbaycan Respublikasının Prezidenti və Milli Məclisi"
        },
        answer: "C"
    },
    {
        id: 15,
        question: "“Dövlət qulluğu haqqında” Azərbaycan Respublikasının Qanununa əsasən 4-cü kateqoriya dövlət orqanıdır:",
        options: {
            A: "rayon məhkəmələri",
            B: "inzibati-iqtisadi məhkəmələr",
            C: "apellyasiya məhkəmələri",
            D: "konstitusiya məhkəməsi"
        },
        answer: "A"
    },
    {
        id: 16,
        question: "“Dövlət qulluğu haqqında” Azərbaycan Respublikasının Qanununa əsasən dövlət qulluqçusuna tətbiq edilən intizam tənbeh tədbirlərinə aid deyil:",
        options: {
            A: "xəbərdarlıq",
            B: "dövlət qulluğundan azad edilməsi",
            C: "daha aşağı təsnifatdan olan digər vəzifəyə keçirilməsi",
            D: "ixtisas dərəcəsinin bir pillə aşağı salınması"
        },
        answer: "B"
    },
    {
        id: 17,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən Azərbaycan Respublikası vətəndaşlarının əsas vəzifələrinə aiddir:",
        options: {
            A: "tətil etmək",
            B: "ətraf mühiti qorumaq",
            C: "mədəniyyət təsisatlarından və mədəni sərvətlərdən istifadə etmək",
            D: "sərbəst toplaşmaq"
        },
        answer: "B"
    },
    {
        id: 18,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən Naxçıvan Muxtar Respublikasının statusu:",
        options: {
            A: "Azərbaycan Respublikasının tərkibində suveren dövlətdir",
            B: "Azərbaycan Respublikasının tərkibində müstəqil dövlətdir",
            C: "Azərbaycan Respublikasının tərkibində muxtar dövlətdir",
            D: "Azərbaycan Respublikasının tərkibində federativ dövlətdir"
        },
        answer: "B"
    },
    {
        id: 19,
        question: "“Azərbaycan Respublikasında dövlət dili haqqında” Qanuna əsasən inzibati ərazi vahidlərinin adları dövlət dili ilə yanaşı xarici dillərdə də yazıldıqda hansı qaydada verilməlidir?",
        options: {
            A: "dövlət dilində şaquli, xarici dildə üfiqi",
            B: "əvvəl dövlət dilində, sonra xarici dildə",
            C: "hər iki dildə şaquli şəkildə",
            D: "əvvəl xarici dildə, sonra dövlət dilində"
        },
        answer: "B"
    },
    {
        id: 20,
        question: "“Vətəndaşların müraciətlərinə baxılması qaydası haqqında” Qanuna əsasən əlavə öyrənilməsi və yoxlanılması tələb edilməyən müraciətə baxılmalıdır:",
        options: {
            A: "ən geci 20 iş günü ərzində",
            B: "ən geci 15 iş günü ərzində",
            C: "ən geci 15 gün ərzində",
            D: "ən geci 20 gün ərzində"
        },
        answer: "B"
    },
    {
        id: 21,
        question: "“Dövlət hakimiyyəti orqanlarında, idarə, təşkilat və müəssisələrində kargüzarlığın aparılmasına dair Təlimat”a əsasən sənədin tarixinin yazılışı düzgün verilməyib:",
        options: {
            A: "14 noyabr 2007-ci il",
            B: "14.11.2007-ci il",
            C: "14.11.07",
            D: "14/11/07"
        },
        answer: "D"
    },
    {
        id: 22,
        question: "“Elektron imza və elektron sənəd haqqında” AR Qanununa əsasən imza sahibi qarşı tərəfi nə vaxt xəbərdar etməlidir?",
        options: {
            A: "təsdiq olunmayan elektron imzadan istifadə edərkən",
            B: "sertifikatı olmayan elektron imza vasitələrini tətbiq edərkən",
            C: "təsdiq olunmayan elektron imza vasitələrindən istifadə edərkən",
            D: "sertifikatı olmayan elektron imzadan istifadə edərkən"
        },
        answer: "D"
    },
    {
        id: 23,
        question: "“Dövlət hakimiyyəti orqanlarında, idarə, təşkilat və müəssisələrində kargüzarlığın aparılmasına dair Təlimat”a əsasən protokolun mətni ibarət olmalıdır:",
        options: {
            A: "giriş və şərh hissələrindən",
            B: "giriş və əsas hissələrindən",
            C: "şərh və sərəncam hissələrindən",
            D: "şərh və əsas hissələrindən"
        },
        answer: "B"
    },
    {
        id: 24,
        question: "“Dövlət qulluğu haqqında” Azərbaycan Respublikasının Qanununa əsasən dövlət qulluqçusunun əsas hüquqlarına aid deyil:",
        options: {
            A: "ictimai birliklərdən lazımi informasiya və materiallar tələb etmək və almaq",
            B: "sərbəst qaydada pedaqoji və başqa ödənişli fəaliyyətlə məşğul olmaq",
            C: "qiymətli kağızlardan, rentadan və icarədən gəlir götürmək",
            D: "vəzifə maaşına əlavələr və mükafatlar almaq"
        },
        answer: "B"
    },
    {
        id: 25,
        question: "Sənədlər blanksız tərtib edilir:",
        options: {
            A: "heç bir halda",
            B: "sənədlər iki və ya daha artıq təşkilat adından hazırlanarsa",
            C: "rəhbərin göstərişi ilə",
            D: "təşkilatların qarşılıqlı razılığı ilə"
        },
        answer: "B"
    },
    {
        id: 26,
        question: "“Dövlət qulluğu haqqında” Azərbaycan Respublikasının Qanununa əsasən dövlət qulluqçusu dövlət qulluğunda irəli çəkilə bilər:",
        options: {
            A: "yalnız müsahibə yolu ilə",
            B: "qulluqda yüksəliş, müsahibə və ya müsabiqə yolu ilə",
            C: "yalnız müsabiqə və müsahibə yolu ilə",
            D: "yalnız qulluqda yüksəliş yolu ilə"
        },
        answer: "B"
    },
    {
        id: 27,
        question: "“Dövlət hakimiyyəti orqanlarında, idarə, təşkilat və müəssisələrində kargüzarlığın aparılmasına dair Təlimat”a əsasən aktın hazırlanması və tərtib edilməsi ilə bağlı düzgün deyil:",
        options: {
            A: "Aktın mətni giriş və şərh hissələrindən ibarət olmalıdır",
            B: "Şərh hissəsində məqsəd, vəzifələr, faktlar və nəticələr göstərilir",
            C: "Aktın mətninin sonunda qəbul edilən qərarlar göstərilməlidir",
            D: "Giriş hissəsində aktın tərtib edilməsinin əsası göstərilir"
        },
        answer: "C"
    },
    {
        id: 28,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən Naxçıvan Muxtar Respublikasında yerli icra hakimiyyətlərinin başçıları hansı qaydada vəzifəyə təyin edilir?",
        options: {
            A: "Naxçıvan Muxtar Respublikası Ali Məclisinin sədri təyin edir",
            B: "AR Prezidentinin razılığı ilə NMR Ali Məclisinin sədri təyin edir",
            C: "NMR Ali Məclisi sədrinin təqdimatı ilə AR Prezidenti təyin edir",
            D: "təqdimat olmadan AR Prezidenti birbaşa təyin edir"
        },
        answer: "C"
    },
    {
        id: 29,
        question: "“Dövlət qulluğu haqqında” Qanuna əsasən dövlət orqanlarında inzibati vəzifələrin altıncı təsnifatına uyğun olan vəzifələrin tutulması həyata keçirilir:",
        options: {
            A: "qulluqda yüksəliş yolu ilə",
            B: "yalnız daxili müsahibə yolu ilə",
            C: "müsabiqə və qulluqda yüksəliş yolu ilə",
            D: "müsabiqə və müsahibə yolu ilə"
        },
        answer: "D"
    },
    {
        id: 30,
        question: "“Dövlət qulluğu haqqında” Qanuna əsasən dövlət orqanları kateqoriyalar üzrə təsnifləşdirilərkən nəzərə alınmır:",
        options: {
            A: "funksiyası",
            B: "yurisdiksiyası",
            C: "statusu",
            D: "iyerarxiyası"
        },
        answer: "A"
    },
    {
        id: 31,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən dini mərasimlərin yerinə yetirilməsinə yol verilmir:\n" +
            "1. ictimai qaydanı pozduqda\n" +
            "2. qeyri-islam dinlərinə aid olduqda\n" +
            "3. ictimai əxlaqa zidd olduqda\n" +
            "4. kütləvi şəkildə həyata keçirildikdə",
        options: {
            A: "1, 3",
            B: "2, 3",
            C: "1, 4",
            D: "2, 4"
        },
        answer: "A"
    },
    {
        id: 32,
        question: "Bələdiyyələrin statusunun əsasları müəyyən edilir:",
        options: {
            A: "Azərbaycan Respublikasının Milli Məclisinin qərarı ilə",
            B: "Azərbaycan Respublikasının Konstitusiyası ilə",
            C: "Azərbaycan Respublikasının Prezidentinin Fərmanı ilə",
            D: "Azərbaycan Respublikasının Nazirlər Kabinetinin qərarı ilə"
        },
        answer: "B"
    },
    {
        id: 33,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən vəzifəyə seçilmə və ya təyinat yolu ilə işləyən şəxs hansı halda vəzifədən getmiş sayılır və bir daha bu vəzifəni tuta bilməz?",
        options: {
            A: "dövlətə qarşı cinayət ittihamı əsasında məhkum olunubsa",
            B: "məhkəmə qərarı ilə fəaliyyət qabiliyyətsizliyi təsdiq olunubsa",
            C: "xüsusilə ağır cinayət törətməkdə məhkum olunubsa",
            D: "Azərbaycan Respublikasının vətəndaşlığından çıxıbsa"
        },
        answer: "A"
    },
    {
        id: 34,
        question: "Azərbaycan Respublikasının Konstitusiyanın birinci fəsli adlanır: ",
        options: {
            A: "Əsas insan və vətəndaş hüquq və azadlıqları ",
            B: "Xalq hakimiyyəti",
            C: "Dövlətin əsasları",
            D: "Hakimiyyətin mənbəyi"
        },
        answer: "B"
    },
    {
        id: 35,
        question: "“Dövlət qulluğu haqqında” Azərbaycan Respublikasının Qanununa əsasən Naxçıvan Muxtar Respublikasın Ali Məhkəməsinin aparat rəhbəri vəzifəsi aiddir: ",
        options: {
            A: " inzibati vəzifələrin beşinci təsnifatına ",
            B: " inzibati vəzifələrin üçüncü təsnifatına",
            C: "inzibati vəzifələrin dördüncü təsnifatına",
            D: "inzibati vəzifələrin ikinci təsnifatına "
        },
        answer: "D"
    },
    {
        id: 36,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən dini mərasimlərin yerinə yetirilməsinə yol verilmir:",
        options: {
            A: "ictimai qaydanı pozduqda və ictimai əxlaqa zidd olduqda",
            B: "qeyri-islam dinlərinə aid olduqda və ictimai əxlaqa zidd olduqda",
            C: "ictimai qaydanı pozduqda və kütləvi şəkildə həyata keçirildikdə",
            D: "qeyri-islam dinlərinə aid olduqda və kütləvi şəkildə həyata keçirildikdə"
        },
        answer: "A"
    },
    {
        id: 37,
        question: "Bələdiyyələrin statusunun əsasları müəyyən edilir:",
        options: {
            A: "Azərbaycan Respublikasının Milli Məclisinin qərarı ilə",
            B: "Azərbaycan Respublikasının Konstitusiyası ilə",
            C: "Azərbaycan Respublikasının Prezidentinin Fərmanı ilə",
            D: "Azərbaycan Respublikasının Nazirlər Kabinetinin qərarı ilə"
        },
        answer: "A"
    },
    {
        id: 38,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən Konstitusiyaya sadiq qalacağına and içmiş şəxs hansı halda vəzifədən getmiş sayılır və bir daha bu vəzifəni tuta bilməz?",
        options: {
            A: "dövlətə qarşı cinayət ittihamı ilə məhkum olunubsa",
            B: "məhkəmə qərarı ilə fəaliyyət qabiliyyətsizliyi təsdiq olunubsa",
            C: "xüsusilə ağır cinayət törətməkdə məhkum olunubsa",
            D: "Azərbaycan Respublikasının vətəndaşlığından çıxıbsa"
        },
        answer: "A"
    },
    {
        id: 39,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən Milli Məclis hansı məsələyə dair ümumi qaydalar müəyyən edərkən 63 səs çoxluğu ilə qanunlar qəbul edir? ",
        options: {
            A: "Dövlət qulluğu ",
            B: "Milli Məclisə seçkilər və Milli Məclis deputatlarının statusu ",
            C: "Azərbaycan Respublikası Prezidentinin seçkiləri ",
            D: "referendum "
        },
        answer: "A"
    },
    {
        id: 40,
        question: "“Dövlət qulluğu haqqında” Qanuna əsasən dövlət qulluğunda irəli çəkilmək hüququ həyata keçirilir:",
        options: {
            A: "yalnız qulluqda yüksəliş yolu ilə",
            B: "qulluqda yüksəliş, müsahibə və ya müsabiqə yolu ilə",
            C: "yalnız müsabiqə yolu ilə",
            D: "yalnız müsahibə yolu ilə"
        },
        answer: "B"
    },
    {
        id: 41,
        question: "“Vətəndaşların müraciətlərinə baxılması qaydası haqqında” Qanuna əsasən əlavə öyrənilməsi və yoxlanılması tələb edilməyən müraciətə baxılmalıdır:",
        options: {
            A: "ən geci 20 iş günü ərzində",
            B: "ən geci 15 iş günü ərzində",
            C: "ən geci 15 gün ərzində",
            D: "ən geci 20 gün ərzində"
        },
        answer: "B"
    },
    {
        id: 42,
        question: "“Dövlət hakimiyyəti orqanlarında, idarə, təşkilat və müəssisələrində kargüzarlığın aparılmasına dair Təlimat”a əsasən sənədin tarixinin yazılışı düzgün verilməyib:",
        options: {
            A: "14 noyabr 2007-ci il",
            B: "14.11.2007-ci il",
            C: "14.11.07",
            D: "14/11/07"
        },
        answer: "D"
    },
    {
        id: 43,
        question: "“Elektron imza və elektron sənəd haqqında” Qanuna əsasən imza sahibi qarşı tərəfi nə zaman xəbərdar etməlidir?",
        options: {
            A: "təsdiq olunmayan elektron imzadan istifadə edərkən",
            B: "sertifikatı olmayan elektron imza vasitələrini tətbiq edərkən",
            C: "təsdiq olunmayan elektron imza vasitələrindən istifadə edərkən",
            D: "sertifikatı olmayan elektron imzadan istifadə edərkən"
        },
        answer: "D"
    },
    {
        id: 44,
        question: "“Dövlət hakimiyyəti orqanlarında, idarə, təşkilat və müəssisələrində kargüzarlığın aparılmasına dair Təlimat”a əsasən protokolun mətni ibarət olmalıdır:",
        options: {
            A: "giriş və şərh hissələrindən",
            B: "giriş və əsas hissələrindən",
            C: "şərh və sərəncam hissələrindən",
            D: "şərh və əsas hissələrindən"
        },
        answer: "B"
    },
    {
        id: 45,
        question: "“Dövlət qulluğu haqqında” Qanuna əsasən dövlət qulluqçusuna tətbiq edilən intizam tənbeh tədbirlərinə aid deyil:",
        options: {
            A: "xəbərdarlıq",
            B: "dövlət qulluğundan azad edilməsi",
            C: "daha aşağı təsnifatdan olan digər vəzifəyə keçirilməsi",
            D: "ixtisas dərəcəsinin bir pillə aşağı salınması"
        },
        answer: "B"
    },
    {
        id: 46,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən Azərbaycan Respublikası vətəndaşlarının əsas vəzifələrinə aiddir:",
        options: {
            A: "tətil etmək",
            B: "ətraf mühiti qorumaq",
            C: "mədəniyyət təsisatlarından və mədəni sərvətlərdən istifadə etmək",
            D: "sərbəst toplaşmaq"
        },
        answer: "B"
    },
    {
        id: 47,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən Naxçıvan Muxtar Respublikasının statusu:",
        options: {
            A: "Azərbaycan Respublikasının tərkibində suveren dövlətdir",
            B: "Azərbaycan Respublikasının tərkibində müstəqil dövlətdir",
            C: "Azərbaycan Respublikasının tərkibində muxtar dövlətdir",
            D: "Azərbaycan Respublikasının tərkibində federativ dövlətdir"
        },
        answer: "C"
    },
    {
        id: 48,
        question: "“Azərbaycan Respublikasında dövlət dili haqqında” Qanuna əsasən inzibati ərazi vahidlərinin adları dövlət dili ilə yanaşı xarici dillərdə də yazıldıqda necə verilməlidir?",
        options: {
            A: "dövlət dilində şaquli, xarici dildə üfiqi",
            B: "əvvəl dövlət dilində, sonra xarici dildə",
            C: "hər iki dildə şaquli şəkildə",
            D: "əvvəl xarici dildə, sonra dövlət dilində"
        },
        answer: "B"
    },
    {
        id: 49,
        question: "“Dövlət qulluğu haqqında” Qanuna əsasən barəsində intizam tənbehi tətbiq edilmiş dövlət qulluqçuları hansı müddət ərzində müsahibə və müsabiqəyə buraxılmırlar?",
        options: {
            A: "iki il",
            B: "altı ay",
            C: "bir il altı ay",
            D: "bir il"
        },
        answer: "B"
    },
    {
        id: 50,
        question: "“Dövlət qulluğu haqqında” Qanuna əsasən inzibati vəzifələrin II təsnifatında 3-cü dərəcə dövlət müşavirindən sonra hansı vəzifə gəlir?",
        options: {
            A: "1-ci dərəcə dövlət müşaviri",
            B: "dövlət qulluğunun müşaviri",
            C: "dövlət qulluğunun baş müşaviri",
            D: "dövlət qulluğunun kiçik müşaviri"
        },
        answer: "C"
    },
    {
        id: 51,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən insan və vətəndaş hüquqlarının və azadlıqlarının məhdudlaşdırılması hansı halda yol veriləndir?",
        options: {
            A: "yalnız fövqəladə vəziyyət zamanı",
            B: "qanunla nəzərdə tutulmuş hallarda",
            C: "Prezidentin sərəncamı ilə",
            D: "Milli Məclisin qərarı ilə"
        },
        answer: "A"
    },
    {
        id: 52,
        question: "“Dövlət qulluğu haqqında” Qanuna əsasən dövlət qulluqçusunun andı nə vaxt qəbul olunur?",
        options: {
            A: "Daimi dövlət qulluğuna qəbul olarkən müqaviləsi bağlanarkən",
            B: "ilk iş günündə",
            C: "vəzifəyə təyin edildikdən sonra",
            D: "sınaq müddətinin sonunda"
        },
        answer: "A"
    },
    {
        id: 53,
        question: "“Vətəndaşların müraciətlərinə baxılması qaydası haqqında” Qanuna əsasən təkrar müraciət dedikdə nə başa düşülür?",
        options: {
            A: "eyni vətəndaşın eyni orqana etdiyi müraciət",
            B: "eyni məsələ ilə bağlı əvvəl cavab verilmiş müraciət",
            C: "bir neçə vətəndaşın kollektiv müraciəti",
            D: "elektron formada təqdim edilmiş müraciət"
        },
        answer: "A"
    },
    {
        id: 54,
        question: "Azərbaycan Respublikasının Konstitusiyasına əsasən mülkiyyət hüququ:",
        options: {
            A: "yalnız dövlətə məxsusdur",
            B: "qanunla məhdudlaşdırıla bilməz",
            C: "qanunla qorunur",
            D: "yalnız fiziki şəxslərə aiddir"
        },
        answer: "C"
    }

];

export default questions;





