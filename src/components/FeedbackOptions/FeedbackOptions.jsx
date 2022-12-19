import PropTypes from 'prop-types';
import { Wrap, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsArr = Object.keys(options);
  return (
    <>
      <Wrap>
        {optionsArr.map(el => {
          return (
            <Btn key={el} onClick={() => onLeaveFeedback(el)}>
              {el}
            </Btn>
          );
        })}
      </Wrap>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
