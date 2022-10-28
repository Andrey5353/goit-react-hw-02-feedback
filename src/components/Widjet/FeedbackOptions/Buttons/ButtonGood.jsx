import css from 'components/Widjet/FeedbackOptions/Buttons/ButtonStyle.module.css';

export const ButtonGood = ({ onLeaveFeedback }) => {
  return (
    <button
      className={css.button}
      name="good"
      type="button"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
  );
};
