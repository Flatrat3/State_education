
import React from 'react';
import './TeachersLegislation.css';
import teacherImage from '../assets/teacher_legislation.jpg';

const TeachersLegislation = () => {
    return (
        <div className="teacher-profile-page">
            <div className="container">
                <div className="teacher-profile-card">
                    <div className="teacher-image-wrapper">
                        <img
                            src={teacherImage}
                            alt="Qanunvericilik Müəllimi"
                            className="teacher-image"
                        />
                    </div>
                    <div className="teacher-info">
                        <h2 className="teacher-name">Asim Əhməd</h2>
                        <h3 className="teacher-subject">Qanunvericilik Müəllimi</h3>
                        <div className="teacher-bio">
                            <p>
                                Dövlət qulluğu imtahanlarına hazırlıq sahəsində təcrübəli mütəxəssis.
                                Qanunvericilik mövzularının sadə və anlaşıqlı izahı, imtahan strategiyaları
                                və tələbələrə fərdi yanaşma metodları ilə tanınır.
                            </p>
                            <p>
                                İllər ərzində yüzlərlə tələbənin dövlət qulluğuna qəbul olmasına dəstək olmuşdur.
                                Dərslər həm nəzəri biliklərin möhkəmləndirilməsi, həm də test tapşırıqlarının
                                həlli vərdişlərinin inkişaf etdirilməsi üzərində qurulur. YouTube kanalında 400-dən çox video və 3000-dən çox abunəçi mövcuddur.
                            </p>
                            <div className="teacher-achievements">
                                <div className="achievement">
                                    <span className="count">2+</span>
                                    <span className="label">İl Təcrübə</span>
                                </div>
                                <div className="achievement">
                                    <span className="count">200+</span>
                                    <span className="label">Uğurlu Tələbə</span>
                                </div>
                                <div className="achievement">
                                    <span className="count">3000+</span>
                                    <span className="label">Abunə</span>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-socials">
                            {/* Add specific social links if available later */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachersLegislation;
