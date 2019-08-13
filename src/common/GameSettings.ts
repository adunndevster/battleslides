export const GAME_MODE_BATTLE = 'GAME_MODE_BATTLE';
export const GAME_MODE_PARTY = 'GAME_MODE_PARTY';
export let gameMode = GAME_MODE_BATTLE;
export default function setGameMode(mode: string) {
    gameMode = mode;
}

export const GameSettings = {
    Team1Name: '',
    Team2Name: '',
    RandomizeTeamNames: () => {
        GameSettings.Team1Name = 'The Donkeys';
        GameSettings.Team2Name = 'The Elephants';
    },
    SetupBattleModeGame: () => {
        GameSettings.RandomizeTeamNames();
    },

};
