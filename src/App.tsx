import {Button} from "./shared/ui/Button/Button.tsx";
import {Card} from "./shared/ui/Card/Card.tsx";
import {Input} from "./shared/ui/Input/Input.tsx";

export const App = () => {
  return (
      <div className={'flex items-center gap-x-2'}>
          <Card variant={'default'} padding='sm'>
              <Button
                  variant={'primary'}
                  size='md'
                  fullWidth={false}
              >
                  Добавленные
              </Button>
          </Card>

          <Card variant={'bordered'} padding='lg'>
              <Button
                  variant={'outline'}
                  size='lg'
                  fullWidth={false}
              >
                  Button
              </Button>

              <Input
                  label={'email'}
                  type={'email'}
                  placeholder={'email@example.com'}
                  helperText={'We\'ll never share your email'}
              ></Input>
          </Card>

      </div>

  )
};
