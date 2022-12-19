import PropTypes from 'prop-types';
import { StatList, StatItem, StatItemTotal } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItemTotal>Total: {total}</StatItemTotal>
      {positivePercentage ? (
        <StatItemTotal>
          PositivePercentage: {positivePercentage}%{' '}
        </StatItemTotal>
      ) : (
        <StatItemTotal>PositivePercentage: 0% </StatItemTotal>
      )}
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
