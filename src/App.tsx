import {Button, Card, Input} from "./shared/ui";

export const App = () => {
    return (
        <div className={'flex items-center gap-x-2'}>
            <Card variant={'default'} padding='sm'> <Button
                variant={'primary'}
                size='md'
                fullWidth={false}
            > Добавленные </Button> </Card>

            <Card variant={'bordered'} padding='lg'> <Button
                variant={'outline'}
                size='lg'
                fullWidth={false}
            > Button </Button>

                <Input
                    label={'email'}
                    type={'email'}
                    placeholder={'email@example.com'}
                    helperText={'We\'ll never share your email'}
                ></Input> </Card>

        </div>

    )
};
