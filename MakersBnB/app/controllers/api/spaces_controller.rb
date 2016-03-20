class Api::SpacesController < ApplicationController
  before_action :set_api_space, only: [:show, :edit, :update, :destroy]

  # GET /api/spaces
  # GET /api/spaces.json
  def index
    @api_spaces = Api::Space.all
  end

  # GET /api/spaces/1
  # GET /api/spaces/1.json
  def show
  end

  # GET /api/spaces/new
  def new
    @api_space = Api::Space.new
  end

  # GET /api/spaces/1/edit
  def edit
  end

  # POST /api/spaces
  # POST /api/spaces.json
  def create
    @api_space = Api::Space.new(api_space_params)

    respond_to do |format|
      if @api_space.save
        format.json { render json: @api_space }
        #format.html { redirect_to @api_space, notice: 'Space was successfully created.' }
        #format.json { render :show, status: :created, location: @api_space }
      else
        format.html { render :new }
        format.json { render json: @api_space.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/spaces/1
  # PATCH/PUT /api/spaces/1.json
  def update

    respond_to do |format|
      if @api_space.update(api_space_params)
        format.json { render json: @api_space }
        # format.html { redirect_to @api_space, notice: 'Space was successfully updated.' }
        # format.json { render :show, status: :ok, location: @api_space }
      else
        format.html { render :edit }
        format.json { render json: @api_space.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/spaces/1
  # DELETE /api/spaces/1.json
  def destroy
    @api_space.destroy
    respond_to do |format|
      format.html { redirect_to api_spaces_url, notice: 'Space was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_space
      @api_space = Api::Space.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_space_params
      params.require(:space).permit(:name, :price, :location, :size, :property_type, :id)
    end
end
