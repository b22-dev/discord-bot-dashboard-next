// pages/404.js
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="error-container">
      <div className="magic-text">404</div>
      <div className="error-message">عفوا! الصفحة المطلوبة غير موجودة أو تحت التطوير</div>
      <a href="/" className="home-link">
        الصفحة الرئيسية
      </a>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Almarai&display=swap');

        body {
          font-family: 'Almarai', sans-serif;
        }

        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }

        .magic-text {
          font-size: 100px;
          font-weight: bold;
          color: #ff6384; /* Pink color */
          font-family: 'Cairo', sans-serif;
        }

        .error-message {
          font-size: 24px;
          margin-top: 20px;
          color: white; /* White color for error message */
        }

        .home-link {
          margin-top: 20px;
          font-size: 18px;
          color: #0070f3; /* Blue color */
          text-decoration: none;
          cursor: pointer;
          font-family: 'Cairo', sans-serif;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .home-link:hover {
          background-color: #0056b3; /* Darker blue on hover */
        }
      `}</style>
    </div>
  );
};

export default Custom404;
