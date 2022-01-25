import {Box, Button, FormControl, Input, TextField} from "@mui/material";

const AddView = ({submit}) => {
    let input;
    return (
        <div>
            <Box component={'form'} onSubmit={event => {
                event.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                submit(input.value)
                input.value = ''
            }}>
                <Input id="outlined-basic" label="Outlined" variant="outlined" placeholder={"sdsdsdsds"} inputRef={node => input = node}/>
                <Button variant={"contained"} type={"submit"}>
                    add todo
                </Button>
            </Box>

        </div>
    )
}

export default AddView
