import { Button, ButtonGroup } from "@material-ui/core";

 const CounterControls = ({onIncrement, onDecrement}) => {
return (
    <ButtonGroup
    color="secondary"
    aria-label="outlined secondary button group"
  >
    <Button type="button" onClick={onIncrement}>
      Increment
    </Button>
    <Button type="button" onClick={onDecrement}>
      Decrement
    </Button>
  </ButtonGroup>
)
}

export default CounterControls