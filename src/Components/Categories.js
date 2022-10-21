export default function Categories() {
  return (
    <div className="all-categories">
      <div className="category-header">
        <h3>Categories</h3>
      </div>
      <div className="categories">
        <ol>
          <li>
            <a 
            className="category" 
            href = "#">All Communities</a>
          </li>
          <li>
            <a 
            className="category" 
            href = "#">Near You</a>
          </li>
          <li>
            <a 
            className="category" 
            href = "#">Gaming</a>
          </li>
          <li>
            <a 
            className="category" 
            href = "#">Sports</a>
          </li>
          <li>
            <a 
            className="category" 
            href = "#">News</a>
          </li>
          <li>
            <a 
            className="category" 
            href = "#">TV</a>
          </li>
        </ol>
      </div>
    </div>
  );
}
