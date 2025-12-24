const Heading = ({ className, title, text, titleCSS, textCSS }) => {
  return (
    <div
      className={` mx-auto mb-8 lg:mb-12 flex-col text-center ${className}`}
    >
      {title && <h2 className={`heading text-3xl sm:text-4xl lg:text-5xl font-thin ${titleCSS || 'text-gray-900'} lg:mb-6`}>{title}</h2>}
      {text && <p className={`text-xl ${textCSS || 'text-gray-600'} max-w-xl mx-auto font-light`}>{text}</p>}
    </div>
  );
};

export default Heading;
