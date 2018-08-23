import React from 'react'
import styled from 'styled-components'
import {colors} from '../constants'
import {Heading} from './Text'
import {Row, Cell} from '../components/Grid'
import Card from './Card'

const Wrapper = styled.div`
	margin: 5rem 0;
	overflow: hidden;
`

const Separator = styled(Heading)`
	display: block;
	position: sticky;
	top: 0;
	font-weight: 300;
	background: white;
	padding: 0.375em 0;
	border-bottom: 1px solid ${colors.base88};
	z-index: 1;
`

const CardList = ({title, entries, id}) => (
	<Wrapper id={id}>
		<Separator>{title}</Separator>
		<Row>
			{entries.map(entry => (
				<Cell key={entry.id} xs={12} md={6} lg={4}>
					<Card {...entry}/>
				</Cell>
			))}
		</Row>
	</Wrapper>
)

export default CardList
