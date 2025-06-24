
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            हमारे बारे में
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              सिविल इंजीनियरिंग कंसल्टेंट्स के क्षेत्र में एक प्रतिष्ठित नाम है, जो उत्कृष्टता और नवाचार के लिए समर्पित है। 
              हमारी टीम में अनुभवी और विशेषज्ञ इंजीनियर्स, आर्किटेक्ट्स, और प्रोजेक्ट मैनेजर्स शामिल हैं, 
              जो आपके प्रोजेक्ट्स को सफलतापूर्वक पूरा करने के लिए तत्पर हैं।
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">वर्षों का अनुभव</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">पूर्ण प्रोजेक्ट्स</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">संतुष्ट ग्राहक</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
