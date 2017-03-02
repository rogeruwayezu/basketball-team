class TeamsController < ApplicationController
  def index

  end
  def create
    @team = Person.new(creature: params[:creature], name: params[:name], state: params[:state], sport: params[:sport])
    @team.save
    render json: @team

  end
  
end
