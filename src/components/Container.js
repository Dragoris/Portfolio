import styled from 'styled-components'

const Container = styled.div`
    padding-left: ${props => {
        if (props.full) return 0
        return 'calc((100vw - 960px) / 2)'
    }};
    padding-right: ${props => {
        if (props.full) return 0
        return 'calc((100vw - 960px) / 2)'
    }};
    padding-top: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '50px'
    }};
    padding-bottom: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '50px'
    }};



    @media(max-width: 1200px){
        padding-left: ${props => {
            if (props.full) return 0
            return 'calc((100vw - 800px) / 2)'
        }};
        padding-right: ${props => {
            if (props.full) return 0
            return 'calc((100vw - 800px) / 2)'
        }};

    }
   

`

export default Container