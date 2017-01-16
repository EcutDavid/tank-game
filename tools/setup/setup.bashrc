export TANK_PATH=`pwd | perl -pe "s/tank-game.*/tank-game/"`
alias tank='cd $TANK_PATH; pwd; ls -F'
alias tank_setup='cd $TANK_PATH/tools/setup; pwd; ls -F'
alias ccom='cd $TANK_PATH/client/src/components; pwd; ls -F'
alias csty='cd $TANK_PATH/client/src/styles; pwd; ls -F'
alias aapi='cd $TANK_PATH/api; pwd; ls -F'

