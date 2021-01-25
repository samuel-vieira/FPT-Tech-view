import { Button, Dialog, DialogActions,DialogContent, DialogContentText, DialogTitle, TextField, Slide} from '@material-ui/core'
import React, {useState} from 'react'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Simulacao({Investimento}){

    const [invest, setInvest] = useState(0)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Simulação
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
          <DialogTitle id="form-dialog-title">Simulação</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Insira o Valor de Investimento no Campo Indicado
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Valor"
              type="number"
              fullWidth
              onChange={ event => {
                setInvest(event.target.value)
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
            <Button 
                color="primary"
                onClick={ () => { 
                    Investimento({invest})
                }}
            >
              Simular
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default Simulacao