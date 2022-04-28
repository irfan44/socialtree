type Props = {
  href: string;
  icon?: React.ReactNode;
  text: string;
};

const LinkButton = ({ href, icon, text }: Props) => {
  return (
    <a className="block" href={href}>
      <div className="p-3 bg-neutral-900 rounded-lg text-white flex items-center justify-center">
        <span className="mr-2">{icon}</span>
        {text}
      </div>
    </a>
  );
};
export default LinkButton;
