import { ButtonGood } from 'components/Widjet/FeedbackOptions/Buttons/ButtonGood.jsx';
import { ButtonNeutral } from 'components/Widjet/FeedbackOptions/Buttons/ButtonNeutral.jsx';
import { ButtonBad } from 'components/Widjet/FeedbackOptions/Buttons/ButtonBad.jsx';
import css from 'components/Widjet/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.FeedbackOptions}>
      <ButtonGood onLeaveFeedback={onLeaveFeedback} />
      <ButtonNeutral onLeaveFeedback={onLeaveFeedback} />
      <ButtonBad onLeaveFeedback={onLeaveFeedback} />
    </div>
  );
};
