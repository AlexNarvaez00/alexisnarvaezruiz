import './MiniInfo.css';

const MiniInfo  = ({className = '', header, body, footer ,...props}) => {
  return (
   <div className={`mini-info ${className}`} {...props}>
      <strong className="text-lg md:text-xl">{header}</strong>
      <h2 className="text-4xl md:text-5xl font-extrabold">{body}</h2>
      <p className="text-xl md:text-2xl">{footer}</p>
   </div> 
  );
};

export default MiniInfo;
