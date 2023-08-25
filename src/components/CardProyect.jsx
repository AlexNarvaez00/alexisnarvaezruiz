import CardLink from "./CardLink";
import Tag from "./Tag";

const CardProyect = ({ to, className, title, description, img , tags }) => {
  return (
    <CardLink to={to} className={`bg-zinc-300 dark:bg-zinc-800 text-white min-h-[450px] ${className}`}>
      <img src={`public/code.jpg`}  className={`w-full h-1/2 object-cover`} />
      <div className="w-full h-auto flex flex-col">
        <h3 className={`w-full text-lg md:text-2xl py-3 px-4 font-bold text-gray-800 dark:text-gray-300 `}>{title}</h3>
        <p className={`w-full px-4 truncate text-lg md:text-xl text-gray-800 dark:text-gray-200`}>{description}</p>
        <ul className={`flex flex-wrap gap-3 px-4 mt-4 text-gray-900`}>
          {tags.map( (tag,index) => ( <Tag key={index} title={tag} />)) }
        </ul>
      </div>
    </CardLink>
  );
};

export default CardProyect;
