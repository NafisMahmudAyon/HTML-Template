import Link from 'next/link';

const LinkedButton = ({ href, text, className }) => {
  return (
    <Link href={href} className={`${className}`}>
        {text}
    </Link>
  );
};

export default LinkedButton;