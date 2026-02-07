
import React from 'react';
import './LessonPlanner.css';

const lessonData = [
    ["1", "AR Konstitusiyası", "Giriş və Ümumi müddəalar", "izah", "Konstitusiyanın əsas prinsipləri, məqsədi və tarixi əhəmiyyəti izah ediləcək."],
    ["2", "AR Konstitusiyası", "Əsas hüquqlar və azadlıqlar (I hissə)", "maddə izahı", "İnsan və vətəndaş hüquqlarının təməl prinsipləri və ilk maddələri izah ediləcək."],
    ["3", "AR Konstitusiyası", "Əsas hüquqlar və azadlıqlar (II hissə)", "maddə izahı", "Sosial, iqtisadi və mədəni hüquqlar, eləcə də vətəndaş vəzifələri izah ediləcək."],
    ["4", "AR Konstitusiyası", "Qanunvericilik hakimiyyəti", "izah", "Milli Məclisin strukturu, səlahiyyətləri və qanunvericilik prosesi izah ediləcək."],
    ["5", "AR Konstitusiyası", "İcra hakimiyyəti", "izah", "Azərbaycan Respublikası Prezidentinin səlahiyyətləri, funksiyaları və idarəetmə mexanizmi izah ediləcək."],
    ["6", "AR Konstitusiyası", "Məhkəmə hakimiyyəti", "izah", "Məhkəmə sisteminin quruluşu, hakimlərin statusu və ədalət mühakiməsinin prinsipləri izah ediləcək."],
    ["7", "AR Konstitusiyası", "Naxçıvan Muxtar Respublikası və Bələdiyyələr", "izah", "Muxtar Respublikanın statusu, bələdiyyələrin təşkili və fəaliyyət prinsipləri izah ediləcək."],
    ["8", "AR Konstitusiyası", "Qanunvericilik sistemində Hüquq və Qanun", "izah", "Konstitusiyanın aliliyi, qanunların yeri, Konstitusiyaya əlavə və dəyişikliklər qaydaları izah ediləcək."],
    ["9", "\"Dövlət qulluğu haqqında\" AR Qanunu", "Məqsəd, Dövlət qulluğu anlayışı və prinsipləri", "izah", "Dövlət qulluğunun əhəmiyyəti, əsas məqsədləri və fəaliyyət prinsipləri izah ediləcək."],
    ["10", "\"Dövlət qulluğu haqqında\" AR Qanunu", "Dövlət qulluğu kateqoriyaları", "maddə izahı", "Dövlət qulluqçusu vəzifələrinin təsnifatı və hər bir kateqoriyaya aid tələblər izah ediləcək."],
    ["11", "\"Dövlət qulluğu haqqında\" AR Qanunu", "Dövlət qulluğuna qəbul (keçmə)", "praktiki nümunə", "Dövlət qulluğuna qəbul qaydaları, müsabiqə mərhələləri və sınaq müddəti praktiki nümunələrlə izah ediləcək."],
    ["12", "\"Dövlət qulluğu haqqında\" AR Qanunu", "Hüquq və Vəzifələr, məsuliyyət", "izah", "Dövlət qulluqçularının əsas hüquqları, vəzifələri və intizam məsuliyyəti izah ediləcək."],
    ["13", "Aylıq əlavə haqqın müəyyənləşdirilməsi və ödənilməsi Qaydası", "Aylıq əlavə haqq", "maddə izahı", "Dövlət qulluqçularına ödənilən əlavə haqqın hesablanması və ödəniş prosedurları izah ediləcək."],
    ["14", "Dövlət qulluqçularının etik davranış qaydaları haqqında Qanun", "Əsas müddəalar", "izah", "Dövlət qulluğunda etik prinsiplər, davranış normaları və etik normaların pozulmasının nəticələri izah ediləcək."],
    ["15", "Korrupsiyaya qarşı mübarizə haqqında Qanun", "Korrupsiyanın anlayışı və formaları", "izah", "Korrupsiyanın növləri, yaranma səbəbləri və cəmiyyətə vurduğu zərərlər izah ediləcək."],
    ["16", "Korrupsiyaya qarşı mübarizə haqqında Qanun", "Mübarizə mexanizmləri və məsuliyyət", "praktiki nümunə", "Korrupsiyaya qarşı mübarizə üsulları, preventiv tədbirlər və qanunvericilikdə nəzərdə tutulmuş məsuliyyət izah ediləcək."],
    ["17", "Məlumat azadlığı haqqında Qanun", "Məlumat əldə etmə hüququ", "izah", "İnformasiya əldə etmə hüququ, məlumatın açıqlığı prinsipləri və məhdudiyyətləri izah ediləcək."],
    ["18", "Vətəndaşların müraciəti haqqında Qanun", "Müraciətlərin növləri və baxılma qaydası", "izah", "Vətəndaş müraciətlərinin növləri, onların qəbulu, qeydiyyatı və baxılması qaydaları izah ediləcək."],
    ["19", "Normativ Hüquqi aktlar haqqında Konstitusiya qanunu", "Aktların iyerarxiyası və qəbulu", "izah", "Normativ hüquqi aktların sistemi, qəbulu, dərc edilməsi və qüvvəyə minməsi qaydaları izah ediləcək."],
    ["20", "Dövlət dili haqqında Qanun", "Azərbaycan dilinin statusu və tətbiqi", "izah", "Azərbaycan dilinin dövlət dili statusu, tətbiqi sahələri və mühafizəsi prinsipləri izah ediləcək."],
    ["21", "İnzibati icraat haqqında Qanun", "Giriş, prinsiplər və iştirakçılar", "izah", "İnzibati icraatın əsas prinsipləri, iştirakçıları və inzibati orqanların vəzifələri izah ediləcək."],
    ["22", "İnzibati icraat haqqında Qanun", "İnzibati aktların qəbulu və etirazı", "praktiki nümunə", "İnzibati aktların qəbulu prosedurları, onlara qarşı şikayət və etiraz qaydaları praktiki nümunələrlə izah ediləcək."],
    ["23", "OMBUDSMAN haqqında Konstitusiya Qanunu", "Ombudsman institutunun fəaliyyəti", "izah", "Ombudsman institutunun funksiyaları, səlahiyyətləri və insan hüquqlarının müdafiəsində rolu izah ediləcək."],
    ["24", "Məhkəmələr və hakimlər haqqında Qanun", "Məhkəmə sistemi və hakimlər", "izah", "Azərbaycan məhkəmə sisteminin quruluşu, hakimlərin seçilməsi və səlahiyyətləri izah ediləcək."],
    ["25", "Məhkəmələr və hakimlər haqqında Qanun", "Məhkəmə icraatı və qərarlar", "praktiki nümunə", "Məhkəmə icraatının mərhələləri, qərarların çıxarılması və icrası praktik nümunələrlə izah ediləcək."],
    ["26", "Elektron imza və elektron sənəd haqqında Qanun", "Elektron sənəd dövriyyəsi", "izah", "Elektron imzanın hüquqi qüvvəsi, elektron sənəd dövriyyəsi və təhlükəsizlik prinsipləri izah ediləcək."],
    ["27", "Kargüzarlığın aparılmasına dair Təlimat", "Sənədlərin tərtibi və qeydiyyatı", "izah", "Rəsmi sənədlərin düzgün tərtibi, daxil olan/gedən sənədlərin qeydiyyatı qaydaları izah ediləcək."],
    ["28", "Kargüzarlığın aparılmasına dair Təlimat", "Sənədlərin saxlanması və arxivləşdirilməsi", "praktiki nümunə", "Sənədlərin müvafiq qaydada saxlanılması, arxivləşdirilməsi və məhv edilməsi prosedurları praktiki nümunələrlə izah ediləcək."],
    ["29", "Ümumi Təkrar", "Bütün qanunlar üzrə əsas müddəaların təkrarı", "izah", "Öncəki dərslərdə öyrənilən bütün qanunvericilik aktlarının əsas müddəaları ümumi şəkildə təkrarlanacaq."],
    ["30", "Test və Praktiki Suallar", "Ümumi qiymətləndirmə", "praktiki nümunə", "Keçirilmiş mövzular üzrə test suallarının həlli və praktiki vəziyyətlərin təhlili izah ediləcək."]
];

const LessonPlanner = () => {
    const getBadgeClass = (type) => {
        if (type.includes('izah')) return 'badge-izah';
        if (type.includes('maddə')) return 'badge-madde';
        if (type.includes('praktiki')) return 'badge-praktik';
        return '';
    };

    return (
        <div className="lesson-planner-page">
            <div className="lesson-planner-container">
                {/* Header */}
                <header className="lesson-header">
                    <div className="lesson-badge">
                        Professional Tədris Proqramı
                    </div>
                    <h1 className="lesson-title gradient-text">
                        30 günlük dövlət qulluğu qanunvericiliyi dərs planı
                    </h1>
                    <p className="lesson-description">
                        Dövlət qulluğuna hazırlıq üçün sistemləşdirilmiş, hər günü detallandırılmış peşəkar təlim proqramı.
                    </p>
                </header>

                {/* Main Content */}
                <div className="lesson-grid">
                    {lessonData.map((row, index) => (
                        <div key={index} className="lesson-card">
                            <div className="card-header">
                                <div className="day-badge">{row[0]}</div>
                                <span className={`type-badge ${getBadgeClass(row[3])}`}>{row[3]}</span>
                            </div>

                            <div className="card-content">
                                <h3 className="card-title">
                                    {row[1]}: <span className="font-normal text-slate-600">{row[2]}</span>
                                </h3>

                                <div className="card-section">
                                    <span className="section-label">Nə izah ediləcək</span>
                                    <p className="section-text">{row[4]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LessonPlanner;
