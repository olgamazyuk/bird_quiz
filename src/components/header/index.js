import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import * as S from './styled';

const Header = ({score, pages, activePage}) => {

  return (
    <S.Header>
      <S.TopPanel>
        <h1>Songbird</h1>
        <S.Score>Score: {score}</S.Score>
      </S.TopPanel>
      <S.Pagination>
        {pages.map((page, i) => (
          <S.PageItem
            key={`${page} + ${i}`}
            className={i === activePage ? 'activePage' : ''}
          >{page}
          </S.PageItem>
        ))}
      </S.Pagination>
    </S.Header>
  );
}

const mapStateToProps = state => ({
  score: state.currentScore,
  activePage: state.activePage
})

export default connect(mapStateToProps, null)(Header)

