import styled from 'styled-components';

const StyledProfile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	padding: 20px 30px;
	border-radius: 10px;
	margin-bottom: 20px;

	& figure {
		width: 300px;
	}

	& figure img {
		width: 100%;
		aspect-ratio: 1/1;
		border-radius: 50%;
	}

	& .Profile-info {
		width: 75%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20px 0 20px 40px;
	}

	& .Profile-info h2 {
		font-size: 2rem;
		color: #7C1414;
		margin-bottom: -10px;
	}

	& .Profile-info p {
		font-weight: bold;
		font-size: 1.2rem;
		color: rgb(160, 160, 160);
	}

	& .Profile-medias {
		display: flex;
		align-items: center;
		margin-top: 25px;
	}

	& .Profile-medias a {
		width: fit-content;
	}

	& .Profile-medias a svg {
		width: 35px;
		height: 35px;
		fill: black;
		margin-right: 35px;
	}

	@media (max-width: 1000px) {
		& .Profile-medias a svg {
			width: 30px;
			height: 30px;
			margin-right: 25px;
		}
	}

	@media (max-width: 750px) {
		& .Profile-info {
			padding: 10px 0 10px 30px ;
		}

		& .Profile-info h2 {
			font-size: 1.2rem;
		}

		& .Profile-info p {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 600px) {
		& {
			padding: 20px 0;
		}

		& figure {
			width: 200px;
		}

		& .Profile-info {
			padding-left: 20px;
		}

		& .Profile-medias {
			margin-top: 20px;
		}
	}

	@media (max-width: 500px) {
		& {
			flex-direction: column;
			padding: 20px 15px 10px 15px;
		}

		& figure {
			width: 300px;
		}

		& .Profile-info {
			width: 100%;
			align-items: center;
			padding: 0 10px 10px 10px;
		}

		& .Profile-info h2 {
			margin-bottom: -5px;
		}

		& .Profile-medias {
			width: 100%;
			justify-content: space-between;
		}

		& .Profile-medias a svg {
			margin: 0;
		}
	}

	@media (max-width: 380px) {
		& .Profile-info {
			padding: 10px 10px 0 10px;
		}

		& .Profile-info h2 {
			font-size: 1rem;
		}

		& .Profile-info p {
			font-size: 0.7rem;
		}

		& .Profile-medias a svg {
			width: 25px;
			height: 25px;
		}
	}
`;

export default StyledProfile;
