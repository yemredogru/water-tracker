import { View,Text, TouchableHighlight,StyleSheet } from "react-native"
const Portion=(props)=>{
    return(
        <TouchableHighlight style={style.submit}>
            <Text style={style.submitText}>{props.title}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width:'40%'
      },
      submitText: {
        color: '#fff',
        textAlign: 'center',
      }
  });

export default Portion