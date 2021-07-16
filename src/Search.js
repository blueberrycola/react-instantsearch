import algoliasearch from 'algoliasearch';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure,
  } from 'react-instantsearch-dom';
import './Search.css';

//Configure Search Client
const searchClient = algoliasearch(
    'APPLICATION_ID', //APP_ID
    '(API_KEY || ADMIN_KEY)' 
);

const Search = () => (
    <div className="instantsearch">
        {/* Initialize Search Bar and use searchClient and indexName to connect to specific index */}
        <InstantSearch searchClient={searchClient} indexName="algoliatest">
            {/* This is the left side refinement panel using the attribute:type. Which is from the json data documents from algolias index */}
            <div className="leftpanel">
                <h2>Type:</h2>
                <RefinementList attribute="type"/>
                <Configure hitsPerPage={8} />
                <ClearRefinements />
            </div>
            {/* Initialize Hit Component: Shows Search Results */}
            <div className='rightpanel'>
                 <SearchBox />
                 <Hits hitComponent={Hit} />
            </div>
            
        </InstantSearch>
    </div>    
);
//Function responsible for what is shown in the json documents that are queried
function Hit(props) {
    return (
      <div>
        <div className="hit-name">
          <Highlight attribute="item" hit={props.hit} />
        </div>
        <div className="hit-type">
          <Highlight attribute="type" hit={props.hit} />
        </div>
        <div className="hit-rating">
          <Highlight attribute="rating" hit={props.hit} />
        </div>
        
      </div>
    );
  }

export default Search;

