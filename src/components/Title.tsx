interface ITitleProps {
  title: string;
  subTitle?: string;
  legend?: string;
  titleClasses?: string;
  subTitleClasses?: string;
};

export const Title = ({ title, legend, subTitle, titleClasses, subTitleClasses }: ITitleProps) => {
  return (
    <div>
      <h1 className={`${titleClasses} mt-2 text-2xl font-mono text-blue-800 md:text-3xl dark:text-white`}>{title}</h1>
      <p className={`${subTitleClasses} font-medium text-blue-500 dark:text-blue-400`}>{subTitle}</p>

      <p className="mt-3 text-gray-500 dark:text-gray-400">{legend}</p>
    </div>
  )
}