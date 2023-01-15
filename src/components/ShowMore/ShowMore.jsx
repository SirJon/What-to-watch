import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class ShowMore extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  onShowMoreClick = (e) => {
    e.preventDefault();
    this.props.onShowMoreCLick();
  };

  render() {
    const { films, amount } = this.props;
    return (
      <div className="catalog__more">
        {films.length > amount &&
          <button
            className="catalog__button"
            type="button"
            onClick={(e) => this.onShowMoreClick(e)}
          >Show more</button>}
      </div>
    )
  };
};

ShowMore.propTypes = {
};

export default ShowMore;
