type SortItemProps = {
  option: string;
}

function SortItem ({option} : SortItemProps) : JSX.Element {
  return (
    <li className="places__option places__option--active" tabIndex={0}>{option}</li>
  );
}

export default SortItem;
