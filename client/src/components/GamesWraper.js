import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from './layout/Header';
import GamesTable from './GamesTable';
import Select from './layout/Select'
import GameInfo from './GameInfo';

const GAMES_ENDPOINT = '/games';
const FILTER_GAMES = (category) => `/games/${category}`;
const ADD_COMMENT = '/comments'
const COMMENTS_ENDPINT = (id) => `/comments/${id}`

class GamesWraper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            category: 'all',
            game: '',
            comments: [],
            comment: ''
        }
    }

    async componentDidMount(){
        const { data } = await axios.get(GAMES_ENDPOINT);
        this.setState({ games: data })
    }

    async onChange(value) {
        if(value === 'all'){
            const { data } = await axios.get(GAMES_ENDPOINT);
            this.setState({ games: data, category: 'all', game: '' });
            this.props.history.push(`/games`)
        } else {
            const { data } = await axios.get(FILTER_GAMES(value));
            this.setState({ games: data, category: value, game: '' })
            this.props.history.push(`/games/${value}`)
        }
    }

    async onClick(match) {
        const { data } = await axios.get(COMMENTS_ENDPINT(match.id));
        const commentsArr = data.map(({comment}) => comment)
        this.setState({game: match, comments: commentsArr})
        this.props.history.push('/match');
    }

    handleComment(value) {
        this.setState({comment: value})
    }

    async newComment(id) {
        const { comment } = this.state;
        try {
            await axios.post(ADD_COMMENT, {
                comment: comment, 
                gameID: id
            });
            const { data } = await axios.get(COMMENTS_ENDPINT(id));
            const commentsArr = data.map(({comment}) => comment)
            this.setState({comments: commentsArr});
        } catch (err) {
            console.error(err.message)
        }
    }
  
    render() {
        const { games, category, game, comments } = this.state;
        return (
            <Fragment>
                <div className="App">
                    <Header />
                    <br/>
                    <Select onChange={(value) => this.onChange(value)} category={category} />
                    <br></br>
                    {games.length > 0 && !game ? 
                        <GamesTable 
                            games={games} 
                            onClick={(data) => this.onClick(data)} 
                        /> :
                        <GameInfo 
                            data={game} 
                            comments={comments}
                            onChange={(value) => this.handleComment(value)}
                            onClick={(id) => this.newComment(id)}
                        />
                    }
                </div>
            </Fragment>
          );
    }
}

export default GamesWraper;
