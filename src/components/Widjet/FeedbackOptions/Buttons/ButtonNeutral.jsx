import css from 'components/Widjet/FeedbackOptions/Buttons/ButtonStyle.module.css';

export const ButtonNeutral = ({ onLeaveFeedback }) => {
  return (
    <button
      className={css.button}
      name="neutral"
      type="button"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
  );
};
