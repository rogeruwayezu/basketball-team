class Api::V2::TeamsController < ApplicationController
   def index
     @teams = Team.all
     render json: @teams
   end
   def create
     @team = Team.new(creature: params[:creature], name: params[:name], state: params[:state], sport: params[:sport])
     @team.save
     render :show
   end
   def new

   end
   def show
    @team = Team.find_by(id: params[:id])
   end
   def update
    @team = Team.find_by(id: params[:id])
    @team.update(creature: params[:creature], name: params[:name], state: params[:state], sport: params[:sport])
   end
   def destroy
    @team = Team.find_by(id: params[:id])
    @team.destroy
    render json: {message: "Employee FIRED!!!!!"}
   end
end
