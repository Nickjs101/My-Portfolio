import React from 'react'
import TradeHistoryImage from '../../assets/Works/tradingjournal.jpg'


const AppProject1 = () => {
  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto p-0 md:p-6 shadow-lg rounded-lg secondary-color">
        <img src={TradeHistoryImage} alt="Trade History" className="w-full h-auto mb-6 rounded-lg"/>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white rounded-lg">Trading Journal</h1>
        <h2 className="text-xl font-semibold mb-2 text-white">App Overview</h2>
        <p className="mb-4">In the fast-paced world of trading, keeping track of your trades and managing risk is crucial to success. The Trading Journal App is designed to provide traders with an easy and effective way to monitor their trading performance, analyze their strategies, and calculate risks. This blog will guide you through the app's key features, including trade history tracking, risk calculation, performance analysis, and a user-friendly interface.</p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Trade History Tracking</h3>
        <p className="mb-4">One of the core features of the Trading Journal App is the Trade History Tracking. This feature allows you to log every trade you make, complete with details such as entry and exit points, profit/loss, and notes. This comprehensive tracking helps you to review your past trades and identify patterns and areas for improvement.</p>
       
        <h3 className="text-lg font-semibold mb-2 text-white">Risk Calculation</h3>
        <p className="mb-4">Managing risk is essential for any successful trader. This app includes a robust Risk Calculation tool that helps you determine the risk percentage for each trade. By inputting your entry price, stop-loss, and position size, the app calculates the potential risk, allowing you to make informed decisions and avoid overexposure.</p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Performance Analysis</h3>
        <p className="mb-4">Understanding your trading performance is key to growth. The Performance Analysis feature provides detailed analytics on your trading activities. These insights help you to evaluate your strategies and make data-driven adjustments for better results.</p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">User-Friendly Interface</h3>
        <p className="mb-4">The Trading Journal App is designed with user experience in mind. Its intuitive interface ensures that you can easily log trades, access analytics, and manage your portfolio. Whether you're a beginner or an experienced trader, the app's simple navigation and clear layout make it a valuable tool in your trading arsenal.</p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Current Development Status</h3>
        <p className="mb-4">I am excited to share that the Trading Journal App is currently in active development. While many key features are fully functional, I am continuously working to enhance the app and add new functionalities based on user needs. Your input is invaluable in shaping the future of the app, and I appreciate your patience and support as I strive to deliver the best trading tool possible.</p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Summary</h3>
        <p className="mb-4">The Trading Journal App is your essential companion for smarter trading. With features like Trade History Tracking, Risk Calculation, Performance Analysis, and a User-Friendly Interface, it empowers you to take control of your trading activities, optimize your strategies, and achieve your financial goals. Start trading smarter today with the Trading Journal App!</p>

        <div className="flex justify-center my-[50px]">
          <a href="https://mega.nz/file/FjIXSKDS#ynkMDEXFHDVzyDC34741AO-lSooazd5NhZx8qK78fOY" download 
            target="_blank" 
            rel="noopener noreferrer"  className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-primary-dark">
            Download the Trading Journal App
          </a>
        </div>

        <h2 className="text-lg font-bold mb-4 text-white">Skills Utilized</h2>
        <div className="flex flex-wrap mb-4">
          {["Java", "XML", "Android Studio", "SQLite"].map((knowledge, index) => (
            <span key={index} className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-semibold py-1 px-3 m-1 rounded-full">
              {knowledge}
            </span>
          ))}
        </div>

      </div>

    </div>
  )
}

export default AppProject1
