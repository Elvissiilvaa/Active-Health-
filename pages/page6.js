import React from 'react'
import { StatusBar } from 'react-native'
import { View, Text, Image, StyleSheet, FlatList, Animated, TouchableHighlight, TouchableOpacity } from 'react-native'

const itemTamanho = 70 + 10 * 3;

const page6 = ({ navigation }) => {
    const users = [

        {
            id: '1', nome: 'Carlos Silva', profissao: 'Personal', email: 'exemplo@gmail.com',
            imagem: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png"
        },
        {
            id: '2', nome: 'Silvana Rodrigues', profissao: 'Personal', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
        {
            id: '3', nome: 'Deise Santos', profissao: 'Personal', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
        {
            id: '4', nome: 'João Victor', profissao: 'Nutricionista', email: 'exemplo@gmail.com',
            imagem: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png"
        },
        {
            id: '5', nome: 'Alberto Santos', profissao: 'Personal', email: 'exemplo@gmail.com',
            imagem: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png"
        },
        {
            id: '6', nome: 'Maria Clara', profissao: 'Nutricionista', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
        {
            id: '7', nome: 'Pedro Victor', profissao: 'Personal', email: 'exemplo@gmail.com',
            imagem: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png"
        },
        {
            id: '8', nome: 'Caio Souza', profissao: 'Nutricionista', email: 'exemplo@gmail.com',
            imagem: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png"
        },
        {
            id: '9', nome: 'Marcos Vinicius', profissao: 'Personal', email: 'exemplo@gmail.com',
            imagem: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png"
        },
        {
            id: '10', nome: 'Maria Eduarda', profissao: 'Nutricionista', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
        {
            id: '11', nome: 'Fernando Gavião', profissao: 'Personal', email: 'exemplo@gmail.com',
            imagem: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png"
        },
        {
            id: '12', nome: 'Bruna Vitória', profissao: 'Nutricionista', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
        {
            id: '13', nome: 'Aguida Aurora', profissao: 'Personal', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
        {
            id: '14', nome: 'Luana Rodrigues', profissao: 'Nutricionista', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
        {
            id: '15', nome: 'Iago Cavalcante', profissao: 'Nutricionista', email: 'exemplo@gmail.com',
            imagem: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes.png"
        },
        {
            id: '16', nome: 'Ana Clara', profissao: 'Personal', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
        {
            id: '17', nome: 'Julia Silva', profissao: 'Nutricionista', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
        {
            id: '18', nome: 'Fernanda Souza', profissao: 'Nutricionista', email: 'exemplo@outlook.com',
            imagem: "https://lh3.googleusercontent.com/proxy/IvgBkgI-48y8p0p2-THQKnLmPSc9XN1J3sni84LeoudaeZdW7xofHVIse31dg9ixylmvbh_8zTq0MvuuskHg8BHLlJZHlHndSbRUqbeg1yRavU38UpmYTItC-lwF"
        },
    ]

    const scrollY = React.useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container}>
            <Image style={StyleSheet.absoluteFillObject} blurRadius={15} source={require('../assets/Ativa-pag1.png')}>

            </Image>
            <Animated.FlatList data={users}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 10, paddingTop: StatusBar.currentHeight || 42 }}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        -1,
                        0,
                        itemTamanho * index,
                        itemTamanho * (index + 2)
                    ]
                    const opacityInputRange = [
                        -1,
                        0,
                        itemTamanho * index,
                        itemTamanho * (index + .85)
                    ]
                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })
                    const opacity = scrollY.interpolate({
                        inputRange: opacityInputRange,
                        outputRange: [1, 1, 1, 0]
                    })
                    return (
                        <Animated.View style={{ flexDirection: 'row', padding: 10, marginBottom: 10, backgroundColor: '#edf6f9', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowRadius: 24, shadowOpacity: 0.35, opacity, transform: [{ scale }] }}>
                            <Image source={{ uri: item.imagem }}
                                style={{ width: 70, height: 70, borderRadius: 70, marginRight: 12 }}></Image>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: '700', }}>{item.nome}</Text>
                                <Text style={{ fontSize: 16, opacity: 0.75 }}>{item.profissao}</Text>
                                <Text style={{ fontsize: 12, opacity: 0.85, color: '#476C9B' }}>{item.email}</Text>
                                <TouchableHighlight
                                    style={styles.linkButton}
                                    onPress={() => { navigation.navigate('page3') }}
                                >
                                    <Text style={styles.textLinkButton}>Acessar</Text>
                                </TouchableHighlight>



                            </View>
                        </Animated.View>
                    )


                }} >

            </Animated.FlatList>

            <TouchableOpacity
            style={styles.button} onPress={() => { navigation.goBack()}}>
            <Text style={{ fontSize:30, color: 'white' }}>Voltar</Text>
          </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    linkButton: {
        backgroundColor: "#2196F3",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 5
      },

      textLinkButton: {
        color: "#FFFFFF",
        textAlign: 'center'
      },

      button: {
        width: 370,
        height: 50,
        backgroundColor: '#D02090',
        marginTop: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding:10,
      },

});

export default page6;