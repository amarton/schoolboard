<script>
import VoterLogo from '$lib/images/voter-guide-logo.png';

import {
      Dropdown,
      DropdownItem,
      DropdownMenu,
      DropdownToggle
    } from '@sveltestrap/sveltestrap';
  </script>
  
  
  <div class="topper">
    <div class="topper-content">
      <center><a href="./"><img src="{VoterLogo}" id="main-logo"></a> </center>
      <p class="intro-text"><strong class="sub">Who is running for school board in your district?</strong><br> With schools in Maryland facing issues ranging from the Blueprint for Maryland's Future to classroom cellphone use, voters will go to the polls Nov. 5 to vote for their local Board of Education. For that reason, the Local News Network at the University of Maryland's Philip Merrill College of Journalism sent a questionnaire to all 109 school board candidates to get their views on important issues. The results are compiled below.
      <strong class="red">The Maryland general election will be held Nov. 5, 2024. Early voting begins Oct. 24.</strong></p>
        
    </div>
  </div>


  <!-- Start container -->
  <div class="container">


    <p class="sub">Select a district to see Board of Education candidates</p>

    <!-- when a link is clicked, the county name is passed in the url to counties/[counties]-->
    <div class="row">
      <div class="col-md-3">
        <a href="counties/Allegany+County	">
            <button type="button" class="btn btn-primary btn-lg">Allegany County	</button>
        </a>
      </div>

      <div class="col-md-3">
        <Dropdown size="lg">
          <DropdownToggle color="primary" caret>Anne Arundel County</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+1">
                District 1
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+2">
                District 2
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+3">
                District 3
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+4">
                District 4
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+5">
                District 5
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+6">
                District 6
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+7">
                District 7
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
    </div>

    <div class="col-md-3">
      <Dropdown size="lg">
        <DropdownToggle color="primary" caret>Calvert County</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <a href="counties/Calvert+County+District+1">
              District 1
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Calvert+County+District+2">
              District 2
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Calvert+County+District+3">
              District 3
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

    <div class="col-md-3">
      <Dropdown size="lg">
        <DropdownToggle color="primary" caret>Caroline County</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <a href="counties/Caroline+County+District+1">
              District 1
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Caroline+County+District+2">
              District 2
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    <!-- end row-->
    </div>


    <div class="row">
      <div class="col-md-3">
        <a href="counties/Carroll+County">
          <button type="button" class="btn btn-primary btn-lg">Carroll County</button>
        </a>
      </div>

      
      <div class="col-md-3">
        <Dropdown size="lg">
          <DropdownToggle color="primary" caret>Cecil County</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <a href="counties/Cecil+County+District+1">
                District 1
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Cecil+County+District+2">
                District 2
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>    
      </div>

    <div class="col-md-3">
      <a href="counties/Charles+County">
        <button type="button" class="btn btn-primary btn-lg">Charles County</button>
      </a>
    </div>

    <div class="col-md-3">
      <Dropdown size="lg">
        <DropdownToggle color="primary" caret>Dorchester County</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <a href="counties/Dorchester+County+District+1">
              District 1
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Dorchester+County+District+3">
              District 3
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Dorchester+County+District+5">
              District 5
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>    
      </div>

    <!-- end row-->
    </div>


    <div class="row">
      <div class="col-md-3">
        <a href="counties/Frederick+County">
          <button type="button" class="btn btn-primary btn-lg">Frederick County</button>
      </a>
      </div>

      
      <div class="col-md-3">
        <a href="counties/Garrett+County">
            <button type="button" class="btn btn-primary btn-lg">Garrett County</button>
      </a>
    </div>

    <div class="col-md-3">
      <Dropdown size="lg">
        <DropdownToggle color="primary" caret>Howard County</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <a href="counties/Howard+County+District+1">
              District 1
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Howard+County+District+2">
              District 2
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Howard+County+District+3">
              District 3
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Howard+County+District+4">
              District 4
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Howard+County+District+5">
              District 5
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>    
        </div>

    <div class="col-md-3">
      <a href="counties/Kent+County">
        <button type="button" class="btn btn-primary btn-lg">Kent County</button>
      </a>
      </div>

    <!-- end row-->
    </div>


    <div class="row">
      <div class="col-md-3">
        <Dropdown size="lg">
          <DropdownToggle color="primary" caret>Montgomery County</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <a href="counties/Montgomery+County+At+Large">
                At Large
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Montgomery+County+District+2">
                District 2
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Montgomery+County+District+4">
                District 4
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>    

      </div>

      
      <div class="col-md-3">
        <Dropdown size="lg">
          <DropdownToggle color="primary" caret>Prince George's County</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <a href="counties/Prince+George's+County+District+1">
                District 1
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Prince+George's+County+District+4">
                District 4
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Prince+George's+County+District+5">
                District 5
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Prince+George's+County+District+7">
                District 7
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Prince+George's+County+District+8">
                District 8
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>    
    </div>

    <div class="col-md-3">
      <Dropdown size="lg">
        <DropdownToggle color="primary" caret>Queen Anne's County</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <a href="counties/Queen+Anne's+County+District+2">
              District 2
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Queen+Anne's+County+District+3">
              District 3
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Queen+Anne's+County+District+4">
              District 4
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>    
    </div>

    <div class="col-md-3">
      <Dropdown size="lg">
        <DropdownToggle color="primary" caret>Saint Mary's County</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <a href="counties/St.+Mary's+County+At+Large">
              At Large
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/St.+Mary's+County+District+2">
              District 2
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/St.+Mary's+County+District+4">
              District 4
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>    
      </div>

    <!-- end row-->
    </div>



    <div class="row">
      <div class="col-md-3">
        <Dropdown size="lg">
          <DropdownToggle color="primary" caret>Somerset  County</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <a href="counties/Somerset+County+District+2">
                District 2
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Somerset+County+District+4">
                District 4
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      
      <div class="col-md-3">
        <Dropdown size="lg">
          <DropdownToggle color="primary" caret>Talbot County</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <a href="counties/Talbot+County+District+2">
                District 2
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Talbot+County+District+5">
                District 5
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Talbot+County+District+6">
                District 6
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
    </div>

    <div class="col-md-3">
      <a href="counties/Washington+County">
        <button type="button" class="btn btn-primary btn-lg">Washington County</button>
      </a>
    </div>

    <div class="col-md-3">
      <Dropdown size="lg">
        <DropdownToggle color="primary" caret>Worcester County</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <a href="counties/Worcester+County+District+2">
              District 2
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Worcester+County+District+3">
              District 3
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="counties/Worcester+County+District+5">
              District 5
            </a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>

    <!-- end row-->
    </div>

    <div class="method"><a href="method">Read our methodology</a></div>
    
    <!-- close container -->
  </div>

  

<style>
  .row {padding-top:25px;}
</style>