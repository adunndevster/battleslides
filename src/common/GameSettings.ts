export const GAME_MODE_BATTLE = 'GAME_MODE_BATTLE';
export const GAME_MODE_PARTY = 'GAME_MODE_PARTY';
export let GameMode = GAME_MODE_BATTLE;
export default function setGameMode(mode: string) {
    GameMode = mode;
}

export const GameSettings = {
    Presentation: 1,
    Team1Turn: true,
    Team1Name: '',
    Team2Name: '',
    Images: [],
    RandomizeTeamNames: () => {
        GameSettings.Team1Name = 'The Donkeys';
        GameSettings.Team2Name = 'The Elephants';
    },
    SetupGame: () => {
        GameSettings.Team1Turn = true;
        GameSettings.RandomizeTeamNames();
        GameSettings.Presentation = 1;
    },
    SetupBattleModeGame: () => {
        GameSettings.SetupGame();
        setGameMode(GAME_MODE_BATTLE);
    },
    SetupPartyModeGame: () => {
        GameSettings.SetupGame();
        setGameMode(GAME_MODE_PARTY);
    },
    NextPresentation: () => {
        GameSettings.Team1Turn = !GameSettings.Team1Turn;
        GameSettings.Presentation++;
    },
    GetRound: () => {
        return Math.ceil(GameSettings.Presentation / 2);
    },
};
